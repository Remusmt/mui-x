import * as React from 'react';
import { TimeClock, TimeClockProps } from '../TimeClock';
import { TimeView } from '../models';
import { DigitalClock, DigitalClockProps } from '../DigitalClock';
import { BaseClockProps } from '../internals/models/props/clock';
import {
  MultiSectionDigitalClock,
  MultiSectionDigitalClockProps,
} from '../MultiSectionDigitalClock';
import { isTimeView } from '../internals/utils/time-utils';
import { TimeViewWithMeridiem } from '../internals/models';
import type { TimePickerProps } from '../TimePicker/TimePicker.types';

export type TimeViewRendererProps<
  TView extends TimeViewWithMeridiem,
  TComponentProps extends BaseClockProps<any, any>,
> = Omit<TComponentProps, 'views' | 'openTo' | 'view' | 'onViewChange'> & {
  view: TView;
  onViewChange?: (view: TView) => void;
  views: readonly TView[];
};

export const renderTimeViewClock = <TDate extends unknown>({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  ampmInClock,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
}: TimeViewRendererProps<TimeViewWithMeridiem, TimeClockProps<TDate, TimeViewWithMeridiem>>) => (
  <TimeClock<TDate>
    view={view as TimeView}
    onViewChange={onViewChange}
    focusedView={focusedView as TimeView}
    onFocusedViewChange={onFocusedViewChange}
    views={views.filter(isTimeView) as TimeView[]}
    value={value}
    defaultValue={defaultValue}
    onChange={onChange}
    className={className}
    classes={classes}
    disableFuture={disableFuture}
    disablePast={disablePast}
    minTime={minTime}
    maxTime={maxTime}
    shouldDisableTime={shouldDisableTime}
    shouldDisableClock={shouldDisableClock}
    minutesStep={minutesStep}
    ampm={ampm}
    ampmInClock={ampmInClock}
    components={components}
    componentsProps={componentsProps}
    slots={slots}
    slotProps={slotProps}
    readOnly={readOnly}
    disabled={disabled}
    sx={sx}
    autoFocus={autoFocus}
    showViewSwitcher={showViewSwitcher}
    disableIgnoringDatePartForTimeValidation={disableIgnoringDatePartForTimeValidation}
  />
);

export const renderDigitalClockTimeView = <TDate extends unknown>({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
}: TimeViewRendererProps<
  Extract<TimeView, 'hours'>,
  Omit<DigitalClockProps<TDate>, 'timeStep'> & Pick<TimePickerProps<TDate>, 'timeSteps'>
>) => (
  <DigitalClock<TDate>
    view={view}
    onViewChange={onViewChange}
    focusedView={focusedView}
    onFocusedViewChange={onFocusedViewChange}
    views={views.filter(isTimeView)}
    value={value}
    defaultValue={defaultValue}
    onChange={onChange}
    className={className}
    classes={classes}
    disableFuture={disableFuture}
    disablePast={disablePast}
    minTime={minTime}
    maxTime={maxTime}
    shouldDisableTime={shouldDisableTime}
    shouldDisableClock={shouldDisableClock}
    minutesStep={minutesStep}
    ampm={ampm}
    components={components}
    componentsProps={componentsProps}
    slots={slots}
    slotProps={slotProps}
    readOnly={readOnly}
    disabled={disabled}
    sx={sx}
    autoFocus={autoFocus}
    disableIgnoringDatePartForTimeValidation={disableIgnoringDatePartForTimeValidation}
    timeStep={timeSteps?.minutes}
    skipDisabled={skipDisabled}
  />
);

export const renderMultiSectionDigitalClockTimeView = <TDate extends unknown>({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
}: TimeViewRendererProps<TimeViewWithMeridiem, MultiSectionDigitalClockProps<TDate>>) => (
  <MultiSectionDigitalClock<TDate>
    view={view}
    onViewChange={onViewChange}
    focusedView={focusedView}
    onFocusedViewChange={onFocusedViewChange}
    views={views.filter(isTimeView)}
    value={value}
    defaultValue={defaultValue}
    onChange={onChange}
    className={className}
    classes={classes}
    disableFuture={disableFuture}
    disablePast={disablePast}
    minTime={minTime}
    maxTime={maxTime}
    shouldDisableTime={shouldDisableTime}
    shouldDisableClock={shouldDisableClock}
    minutesStep={minutesStep}
    ampm={ampm}
    components={components}
    componentsProps={componentsProps}
    slots={slots}
    slotProps={slotProps}
    readOnly={readOnly}
    disabled={disabled}
    sx={sx}
    autoFocus={autoFocus}
    disableIgnoringDatePartForTimeValidation={disableIgnoringDatePartForTimeValidation}
    timeSteps={timeSteps}
    skipDisabled={skipDisabled}
  />
);
