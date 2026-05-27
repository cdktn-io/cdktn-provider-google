/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StorageInsightsReportConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#deletion_policy StorageInsightsReportConfig#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#display_name StorageInsightsReportConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * If set, all the inventory report details associated with this report configuration are deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#force_destroy StorageInsightsReportConfig#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#id StorageInsightsReportConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the ReportConfig. The source and destination buckets specified in the ReportConfig
  * must be in the same location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#location StorageInsightsReportConfig#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#project StorageInsightsReportConfig#project}
  */
  readonly project?: string;
  /**
  * csv_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#csv_options StorageInsightsReportConfig#csv_options}
  */
  readonly csvOptions?: StorageInsightsReportConfigCsvOptions;
  /**
  * frequency_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#frequency_options StorageInsightsReportConfig#frequency_options}
  */
  readonly frequencyOptions?: StorageInsightsReportConfigFrequencyOptions;
  /**
  * object_metadata_report_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#object_metadata_report_options StorageInsightsReportConfig#object_metadata_report_options}
  */
  readonly objectMetadataReportOptions?: StorageInsightsReportConfigObjectMetadataReportOptions;
  /**
  * parquet_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#parquet_options StorageInsightsReportConfig#parquet_options}
  */
  readonly parquetOptions?: StorageInsightsReportConfigParquetOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#timeouts StorageInsightsReportConfig#timeouts}
  */
  readonly timeouts?: StorageInsightsReportConfigTimeouts;
}
export interface StorageInsightsReportConfigCsvOptions {
  /**
  * The delimiter used to separate the fields in the inventory report CSV file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#delimiter StorageInsightsReportConfig#delimiter}
  */
  readonly delimiter?: string;
  /**
  * The boolean that indicates whether or not headers are included in the inventory report CSV file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#header_required StorageInsightsReportConfig#header_required}
  */
  readonly headerRequired?: boolean | cdktn.IResolvable;
  /**
  * The character used to separate the records in the inventory report CSV file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#record_separator StorageInsightsReportConfig#record_separator}
  */
  readonly recordSeparator?: string;
}

export function storageInsightsReportConfigCsvOptionsToTerraform(struct?: StorageInsightsReportConfigCsvOptionsOutputReference | StorageInsightsReportConfigCsvOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    header_required: cdktn.booleanToTerraform(struct!.headerRequired),
    record_separator: cdktn.stringToTerraform(struct!.recordSeparator),
  }
}


export function storageInsightsReportConfigCsvOptionsToHclTerraform(struct?: StorageInsightsReportConfigCsvOptionsOutputReference | StorageInsightsReportConfigCsvOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_required: {
      value: cdktn.booleanToHclTerraform(struct!.headerRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    record_separator: {
      value: cdktn.stringToHclTerraform(struct!.recordSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsReportConfigCsvOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsReportConfigCsvOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._headerRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRequired = this._headerRequired;
    }
    if (this._recordSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSeparator = this._recordSeparator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsReportConfigCsvOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._headerRequired = undefined;
      this._recordSeparator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._headerRequired = value.headerRequired;
      this._recordSeparator = value.recordSeparator;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // header_required - computed: false, optional: true, required: false
  private _headerRequired?: boolean | cdktn.IResolvable; 
  public get headerRequired() {
    return this.getBooleanAttribute('header_required');
  }
  public set headerRequired(value: boolean | cdktn.IResolvable) {
    this._headerRequired = value;
  }
  public resetHeaderRequired() {
    this._headerRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRequiredInput() {
    return this._headerRequired;
  }

  // record_separator - computed: false, optional: true, required: false
  private _recordSeparator?: string; 
  public get recordSeparator() {
    return this.getStringAttribute('record_separator');
  }
  public set recordSeparator(value: string) {
    this._recordSeparator = value;
  }
  public resetRecordSeparator() {
    this._recordSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSeparatorInput() {
    return this._recordSeparator;
  }
}
export interface StorageInsightsReportConfigFrequencyOptionsEndDate {
  /**
  * The day of the month to stop generating inventory reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#day StorageInsightsReportConfig#day}
  */
  readonly day: number;
  /**
  * The month to stop generating inventory reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#month StorageInsightsReportConfig#month}
  */
  readonly month: number;
  /**
  * The year to stop generating inventory reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#year StorageInsightsReportConfig#year}
  */
  readonly year: number;
}

export function storageInsightsReportConfigFrequencyOptionsEndDateToTerraform(struct?: StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference | StorageInsightsReportConfigFrequencyOptionsEndDate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktn.numberToTerraform(struct!.day),
    month: cdktn.numberToTerraform(struct!.month),
    year: cdktn.numberToTerraform(struct!.year),
  }
}


export function storageInsightsReportConfigFrequencyOptionsEndDateToHclTerraform(struct?: StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference | StorageInsightsReportConfigFrequencyOptionsEndDate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktn.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktn.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktn.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsReportConfigFrequencyOptionsEndDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsReportConfigFrequencyOptionsEndDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: false, required: true
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: false, required: true
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface StorageInsightsReportConfigFrequencyOptionsStartDate {
  /**
  * The day of the month to start generating inventory reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#day StorageInsightsReportConfig#day}
  */
  readonly day: number;
  /**
  * The month to start generating inventory reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#month StorageInsightsReportConfig#month}
  */
  readonly month: number;
  /**
  * The year to start generating inventory reports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#year StorageInsightsReportConfig#year}
  */
  readonly year: number;
}

export function storageInsightsReportConfigFrequencyOptionsStartDateToTerraform(struct?: StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference | StorageInsightsReportConfigFrequencyOptionsStartDate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktn.numberToTerraform(struct!.day),
    month: cdktn.numberToTerraform(struct!.month),
    year: cdktn.numberToTerraform(struct!.year),
  }
}


export function storageInsightsReportConfigFrequencyOptionsStartDateToHclTerraform(struct?: StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference | StorageInsightsReportConfigFrequencyOptionsStartDate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktn.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktn.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktn.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsReportConfigFrequencyOptionsStartDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsReportConfigFrequencyOptionsStartDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: false, required: true
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: false, required: true
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface StorageInsightsReportConfigFrequencyOptions {
  /**
  * The frequency in which inventory reports are generated. Values are DAILY or WEEKLY. Possible values: ["DAILY", "WEEKLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#frequency StorageInsightsReportConfig#frequency}
  */
  readonly frequency: string;
  /**
  * end_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#end_date StorageInsightsReportConfig#end_date}
  */
  readonly endDate: StorageInsightsReportConfigFrequencyOptionsEndDate;
  /**
  * start_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#start_date StorageInsightsReportConfig#start_date}
  */
  readonly startDate: StorageInsightsReportConfigFrequencyOptionsStartDate;
}

export function storageInsightsReportConfigFrequencyOptionsToTerraform(struct?: StorageInsightsReportConfigFrequencyOptionsOutputReference | StorageInsightsReportConfigFrequencyOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktn.stringToTerraform(struct!.frequency),
    end_date: storageInsightsReportConfigFrequencyOptionsEndDateToTerraform(struct!.endDate),
    start_date: storageInsightsReportConfigFrequencyOptionsStartDateToTerraform(struct!.startDate),
  }
}


export function storageInsightsReportConfigFrequencyOptionsToHclTerraform(struct?: StorageInsightsReportConfigFrequencyOptionsOutputReference | StorageInsightsReportConfigFrequencyOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_date: {
      value: storageInsightsReportConfigFrequencyOptionsEndDateToHclTerraform(struct!.endDate),
      isBlock: true,
      type: "list",
      storageClassType: "StorageInsightsReportConfigFrequencyOptionsEndDateList",
    },
    start_date: {
      value: storageInsightsReportConfigFrequencyOptionsStartDateToHclTerraform(struct!.startDate),
      isBlock: true,
      type: "list",
      storageClassType: "StorageInsightsReportConfigFrequencyOptionsStartDateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsReportConfigFrequencyOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsReportConfigFrequencyOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._endDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate?.internalValue;
    }
    if (this._startDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsReportConfigFrequencyOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._endDate.internalValue = undefined;
      this._startDate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._endDate.internalValue = value.endDate;
      this._startDate.internalValue = value.startDate;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // end_date - computed: false, optional: false, required: true
  private _endDate = new StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference(this, "end_date");
  public get endDate() {
    return this._endDate;
  }
  public putEndDate(value: StorageInsightsReportConfigFrequencyOptionsEndDate) {
    this._endDate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate.internalValue;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate = new StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference(this, "start_date");
  public get startDate() {
    return this._startDate;
  }
  public putStartDate(value: StorageInsightsReportConfigFrequencyOptionsStartDate) {
    this._startDate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate.internalValue;
  }
}
export interface StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions {
  /**
  * The destination bucket that stores the generated inventory reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#bucket StorageInsightsReportConfig#bucket}
  */
  readonly bucket: string;
  /**
  * The path within the destination bucket to store generated inventory reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#destination_path StorageInsightsReportConfig#destination_path}
  */
  readonly destinationPath?: string;
}

export function storageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsToTerraform(struct?: StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference | StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    destination_path: cdktn.stringToTerraform(struct!.destinationPath),
  }
}


export function storageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsToHclTerraform(struct?: StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference | StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_path: {
      value: cdktn.stringToHclTerraform(struct!.destinationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._destinationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPath = this._destinationPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._destinationPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._destinationPath = value.destinationPath;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // destination_path - computed: false, optional: true, required: false
  private _destinationPath?: string; 
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }
  public set destinationPath(value: string) {
    this._destinationPath = value;
  }
  public resetDestinationPath() {
    this._destinationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPathInput() {
    return this._destinationPath;
  }
}
export interface StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters {
  /**
  * The filter to use when specifying which bucket to generate inventory reports for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#bucket StorageInsightsReportConfig#bucket}
  */
  readonly bucket?: string;
}

export function storageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersToTerraform(struct?: StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference | StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
  }
}


export function storageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersToHclTerraform(struct?: StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference | StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }
}
export interface StorageInsightsReportConfigObjectMetadataReportOptions {
  /**
  * The metadata fields included in an inventory report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#metadata_fields StorageInsightsReportConfig#metadata_fields}
  */
  readonly metadataFields: string[];
  /**
  * storage_destination_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#storage_destination_options StorageInsightsReportConfig#storage_destination_options}
  */
  readonly storageDestinationOptions: StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions;
  /**
  * storage_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#storage_filters StorageInsightsReportConfig#storage_filters}
  */
  readonly storageFilters?: StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters;
}

export function storageInsightsReportConfigObjectMetadataReportOptionsToTerraform(struct?: StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference | StorageInsightsReportConfigObjectMetadataReportOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metadataFields),
    storage_destination_options: storageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsToTerraform(struct!.storageDestinationOptions),
    storage_filters: storageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersToTerraform(struct!.storageFilters),
  }
}


export function storageInsightsReportConfigObjectMetadataReportOptionsToHclTerraform(struct?: StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference | StorageInsightsReportConfigObjectMetadataReportOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metadataFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    storage_destination_options: {
      value: storageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsToHclTerraform(struct!.storageDestinationOptions),
      isBlock: true,
      type: "list",
      storageClassType: "StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsList",
    },
    storage_filters: {
      value: storageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersToHclTerraform(struct!.storageFilters),
      isBlock: true,
      type: "list",
      storageClassType: "StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsReportConfigObjectMetadataReportOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataFields = this._metadataFields;
    }
    if (this._storageDestinationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDestinationOptions = this._storageDestinationOptions?.internalValue;
    }
    if (this._storageFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageFilters = this._storageFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsReportConfigObjectMetadataReportOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadataFields = undefined;
      this._storageDestinationOptions.internalValue = undefined;
      this._storageFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadataFields = value.metadataFields;
      this._storageDestinationOptions.internalValue = value.storageDestinationOptions;
      this._storageFilters.internalValue = value.storageFilters;
    }
  }

  // metadata_fields - computed: false, optional: false, required: true
  private _metadataFields?: string[]; 
  public get metadataFields() {
    return this.getListAttribute('metadata_fields');
  }
  public set metadataFields(value: string[]) {
    this._metadataFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldsInput() {
    return this._metadataFields;
  }

  // storage_destination_options - computed: false, optional: false, required: true
  private _storageDestinationOptions = new StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference(this, "storage_destination_options");
  public get storageDestinationOptions() {
    return this._storageDestinationOptions;
  }
  public putStorageDestinationOptions(value: StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions) {
    this._storageDestinationOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDestinationOptionsInput() {
    return this._storageDestinationOptions.internalValue;
  }

  // storage_filters - computed: false, optional: true, required: false
  private _storageFilters = new StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference(this, "storage_filters");
  public get storageFilters() {
    return this._storageFilters;
  }
  public putStorageFilters(value: StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters) {
    this._storageFilters.internalValue = value;
  }
  public resetStorageFilters() {
    this._storageFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageFiltersInput() {
    return this._storageFilters.internalValue;
  }
}
export interface StorageInsightsReportConfigParquetOptions {
}

export function storageInsightsReportConfigParquetOptionsToTerraform(struct?: StorageInsightsReportConfigParquetOptionsOutputReference | StorageInsightsReportConfigParquetOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function storageInsightsReportConfigParquetOptionsToHclTerraform(struct?: StorageInsightsReportConfigParquetOptionsOutputReference | StorageInsightsReportConfigParquetOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StorageInsightsReportConfigParquetOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsReportConfigParquetOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsReportConfigParquetOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface StorageInsightsReportConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#create StorageInsightsReportConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#delete StorageInsightsReportConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#update StorageInsightsReportConfig#update}
  */
  readonly update?: string;
}

export function storageInsightsReportConfigTimeoutsToTerraform(struct?: StorageInsightsReportConfigTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function storageInsightsReportConfigTimeoutsToHclTerraform(struct?: StorageInsightsReportConfigTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsReportConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageInsightsReportConfigTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsReportConfigTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config google_storage_insights_report_config}
*/
export class StorageInsightsReportConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_insights_report_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StorageInsightsReportConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageInsightsReportConfig to import
  * @param importFromId The id of the existing StorageInsightsReportConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageInsightsReportConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_insights_report_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_insights_report_config google_storage_insights_report_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageInsightsReportConfigConfig
  */
  public constructor(scope: Construct, id: string, config: StorageInsightsReportConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_insights_report_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.33.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._csvOptions.internalValue = config.csvOptions;
    this._frequencyOptions.internalValue = config.frequencyOptions;
    this._objectMetadataReportOptions.internalValue = config.objectMetadataReportOptions;
    this._parquetOptions.internalValue = config.parquetOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktn.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktn.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // csv_options - computed: false, optional: true, required: false
  private _csvOptions = new StorageInsightsReportConfigCsvOptionsOutputReference(this, "csv_options");
  public get csvOptions() {
    return this._csvOptions;
  }
  public putCsvOptions(value: StorageInsightsReportConfigCsvOptions) {
    this._csvOptions.internalValue = value;
  }
  public resetCsvOptions() {
    this._csvOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvOptionsInput() {
    return this._csvOptions.internalValue;
  }

  // frequency_options - computed: false, optional: true, required: false
  private _frequencyOptions = new StorageInsightsReportConfigFrequencyOptionsOutputReference(this, "frequency_options");
  public get frequencyOptions() {
    return this._frequencyOptions;
  }
  public putFrequencyOptions(value: StorageInsightsReportConfigFrequencyOptions) {
    this._frequencyOptions.internalValue = value;
  }
  public resetFrequencyOptions() {
    this._frequencyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyOptionsInput() {
    return this._frequencyOptions.internalValue;
  }

  // object_metadata_report_options - computed: false, optional: true, required: false
  private _objectMetadataReportOptions = new StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference(this, "object_metadata_report_options");
  public get objectMetadataReportOptions() {
    return this._objectMetadataReportOptions;
  }
  public putObjectMetadataReportOptions(value: StorageInsightsReportConfigObjectMetadataReportOptions) {
    this._objectMetadataReportOptions.internalValue = value;
  }
  public resetObjectMetadataReportOptions() {
    this._objectMetadataReportOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectMetadataReportOptionsInput() {
    return this._objectMetadataReportOptions.internalValue;
  }

  // parquet_options - computed: false, optional: true, required: false
  private _parquetOptions = new StorageInsightsReportConfigParquetOptionsOutputReference(this, "parquet_options");
  public get parquetOptions() {
    return this._parquetOptions;
  }
  public putParquetOptions(value: StorageInsightsReportConfigParquetOptions) {
    this._parquetOptions.internalValue = value;
  }
  public resetParquetOptions() {
    this._parquetOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetOptionsInput() {
    return this._parquetOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageInsightsReportConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageInsightsReportConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      force_destroy: cdktn.booleanToTerraform(this._forceDestroy),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      csv_options: storageInsightsReportConfigCsvOptionsToTerraform(this._csvOptions.internalValue),
      frequency_options: storageInsightsReportConfigFrequencyOptionsToTerraform(this._frequencyOptions.internalValue),
      object_metadata_report_options: storageInsightsReportConfigObjectMetadataReportOptionsToTerraform(this._objectMetadataReportOptions.internalValue),
      parquet_options: storageInsightsReportConfigParquetOptionsToTerraform(this._parquetOptions.internalValue),
      timeouts: storageInsightsReportConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktn.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv_options: {
        value: storageInsightsReportConfigCsvOptionsToHclTerraform(this._csvOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageInsightsReportConfigCsvOptionsList",
      },
      frequency_options: {
        value: storageInsightsReportConfigFrequencyOptionsToHclTerraform(this._frequencyOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageInsightsReportConfigFrequencyOptionsList",
      },
      object_metadata_report_options: {
        value: storageInsightsReportConfigObjectMetadataReportOptionsToHclTerraform(this._objectMetadataReportOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageInsightsReportConfigObjectMetadataReportOptionsList",
      },
      parquet_options: {
        value: storageInsightsReportConfigParquetOptionsToHclTerraform(this._parquetOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageInsightsReportConfigParquetOptionsList",
      },
      timeouts: {
        value: storageInsightsReportConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageInsightsReportConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
