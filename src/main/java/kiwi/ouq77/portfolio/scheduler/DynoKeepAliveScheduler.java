package kiwi.ouq77.portfolio.scheduler;

import java.util.Calendar;

import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.SimpleScheduleBuilder;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.impl.StdSchedulerFactory;

public class DynoKeepAliveScheduler {

	private final Scheduler scheduler;

	public DynoKeepAliveScheduler() throws SchedulerException {
		final Calendar triggerStartAt = Calendar.getInstance();
		// Give Tomcat time to start
		triggerStartAt.add(Calendar.SECOND, 5);
		final JobDetail jobDetail = JobBuilder.newJob(DynoKeepAliveJob.class).build();
		// Run every 50mins
		final Trigger trigger = TriggerBuilder.newTrigger().startAt(triggerStartAt.getTime()).withSchedule(SimpleScheduleBuilder.repeatMinutelyForever(50)).build();

		scheduler = StdSchedulerFactory.getDefaultScheduler();
		scheduler.clear();
		scheduler.scheduleJob(jobDetail, trigger);
	}

	public void start() throws SchedulerException {
		scheduler.start();
	}
}
