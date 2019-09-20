import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { GiveawayTestModule } from '../../../test.module';
import { TestMetricsMonitoringComponent } from 'app/admin/metrics/metrics.component';
import { TestMetricsService } from 'app/admin/metrics/metrics.service';

describe('Component Tests', () => {
  describe('TestMetricsMonitoringComponent', () => {
    let comp: TestMetricsMonitoringComponent;
    let fixture: ComponentFixture<TestMetricsMonitoringComponent>;
    let service: TestMetricsService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [GiveawayTestModule],
        declarations: [TestMetricsMonitoringComponent]
      })
        .overrideTemplate(TestMetricsMonitoringComponent, '')
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestMetricsMonitoringComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TestMetricsService);
    });

    describe('refresh', () => {
      it('should call refresh on init', () => {
        // GIVEN
        const response = {
          timers: {
            service: 'test',
            unrelatedKey: 'test'
          },
          gauges: {
            'jcache.statistics': {
              value: 2
            },
            unrelatedKey: 'test'
          }
        };
        spyOn(service, 'getMetrics').and.returnValue(of(response));

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(service.getMetrics).toHaveBeenCalled();
      });
    });
  });
});
