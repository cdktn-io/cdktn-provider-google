/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OracleDatabaseDbSystemConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the DbSystem to create. This value is
  * restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of
  * 63 characters in length. The value must start with a letter and end with a
  * letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#db_system_id OracleDatabaseDbSystem#db_system_id}
  */
  readonly dbSystemId: string;
  /**
  * Whether or not to allow Terraform to destroy the instance. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#deletion_protection OracleDatabaseDbSystem#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktn.IResolvable;
  /**
  * The display name for the System db. The name does not have to
  * be unique within your project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#display_name OracleDatabaseDbSystem#display_name}
  */
  readonly displayName: string;
  /**
  * The GCP Oracle zone where Oracle DbSystem is hosted.
  * Example: us-east4-b-r2.
  * If not specified, the system will pick a zone based on availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#gcp_oracle_zone OracleDatabaseDbSystem#gcp_oracle_zone}
  */
  readonly gcpOracleZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#id OracleDatabaseDbSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels or tags associated with the DbSystem.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#labels OracleDatabaseDbSystem#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#location OracleDatabaseDbSystem#location}
  */
  readonly location: string;
  /**
  * The name of the OdbNetwork associated with the DbSystem.
  * Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
  * It is optional but if specified, this should match the parent ODBNetwork of
  * the OdbSubnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#odb_network OracleDatabaseDbSystem#odb_network}
  */
  readonly odbNetwork?: string;
  /**
  * The name of the OdbSubnet associated with the DbSystem for IP
  * allocation. Format:
  * projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#odb_subnet OracleDatabaseDbSystem#odb_subnet}
  */
  readonly odbSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#project OracleDatabaseDbSystem#project}
  */
  readonly project?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#properties OracleDatabaseDbSystem#properties}
  */
  readonly properties?: OracleDatabaseDbSystemProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#timeouts OracleDatabaseDbSystem#timeouts}
  */
  readonly timeouts?: OracleDatabaseDbSystemTimeouts;
}
export interface OracleDatabaseDbSystemPropertiesDataCollectionOptions {
  /**
  * Indicates whether to enable data collection for diagnostics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#is_diagnostics_events_enabled OracleDatabaseDbSystem#is_diagnostics_events_enabled}
  */
  readonly isDiagnosticsEventsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether to enable incident logs and trace collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#is_incident_logs_enabled OracleDatabaseDbSystem#is_incident_logs_enabled}
  */
  readonly isIncidentLogsEnabled?: boolean | cdktn.IResolvable;
}

export function oracleDatabaseDbSystemPropertiesDataCollectionOptionsToTerraform(struct?: OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference | OracleDatabaseDbSystemPropertiesDataCollectionOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_diagnostics_events_enabled: cdktn.booleanToTerraform(struct!.isDiagnosticsEventsEnabled),
    is_incident_logs_enabled: cdktn.booleanToTerraform(struct!.isIncidentLogsEnabled),
  }
}


export function oracleDatabaseDbSystemPropertiesDataCollectionOptionsToHclTerraform(struct?: OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference | OracleDatabaseDbSystemPropertiesDataCollectionOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_diagnostics_events_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isDiagnosticsEventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_incident_logs_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isIncidentLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseDbSystemPropertiesDataCollectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDiagnosticsEventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDiagnosticsEventsEnabled = this._isDiagnosticsEventsEnabled;
    }
    if (this._isIncidentLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIncidentLogsEnabled = this._isIncidentLogsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseDbSystemPropertiesDataCollectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isDiagnosticsEventsEnabled = undefined;
      this._isIncidentLogsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isDiagnosticsEventsEnabled = value.isDiagnosticsEventsEnabled;
      this._isIncidentLogsEnabled = value.isIncidentLogsEnabled;
    }
  }

  // is_diagnostics_events_enabled - computed: false, optional: true, required: false
  private _isDiagnosticsEventsEnabled?: boolean | cdktn.IResolvable; 
  public get isDiagnosticsEventsEnabled() {
    return this.getBooleanAttribute('is_diagnostics_events_enabled');
  }
  public set isDiagnosticsEventsEnabled(value: boolean | cdktn.IResolvable) {
    this._isDiagnosticsEventsEnabled = value;
  }
  public resetIsDiagnosticsEventsEnabled() {
    this._isDiagnosticsEventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDiagnosticsEventsEnabledInput() {
    return this._isDiagnosticsEventsEnabled;
  }

  // is_incident_logs_enabled - computed: false, optional: true, required: false
  private _isIncidentLogsEnabled?: boolean | cdktn.IResolvable; 
  public get isIncidentLogsEnabled() {
    return this.getBooleanAttribute('is_incident_logs_enabled');
  }
  public set isIncidentLogsEnabled(value: boolean | cdktn.IResolvable) {
    this._isIncidentLogsEnabled = value;
  }
  public resetIsIncidentLogsEnabled() {
    this._isIncidentLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncidentLogsEnabledInput() {
    return this._isIncidentLogsEnabled;
  }
}
export interface OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig {
}

export function oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigToTerraform(struct?: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference | OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigToHclTerraform(struct?: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference | OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // management_state - computed: true, optional: false, required: false
  public get managementState() {
    return this.getStringAttribute('management_state');
  }

  // management_type - computed: true, optional: false, required: false
  public get managementType() {
    return this.getStringAttribute('management_type');
  }
}
export interface OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails {
  /**
  * The type of the database backup destination.
  * Possible values:
  * NFS
  * RECOVERY_APPLIANCE
  * OBJECT_STORE
  * LOCAL
  * DBRS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#type OracleDatabaseDbSystem#type}
  */
  readonly type?: string;
}

export function oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsToTerraform(struct?: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsToHclTerraform(struct?: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList extends cdktn.ComplexList {
  public internalValue? : OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference {
    return new OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig {
  /**
  * If set to true, enables automatic backups on the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#auto_backup_enabled OracleDatabaseDbSystem#auto_backup_enabled}
  */
  readonly autoBackupEnabled?: boolean | cdktn.IResolvable;
  /**
  * Possible values:
  * MONDAY
  * TUESDAY
  * WEDNESDAY
  * THURSDAY
  * FRIDAY
  * SATURDAY
  * SUNDAY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#auto_full_backup_day OracleDatabaseDbSystem#auto_full_backup_day}
  */
  readonly autoFullBackupDay?: string;
  /**
  * The window in which the full backup should be performed on the database.
  * If no value is provided, the default is anytime.
  * Possible values:
  * SLOT_ONE
  * SLOT_TWO
  * SLOT_THREE
  * SLOT_FOUR
  * SLOT_FIVE
  * SLOT_SIX
  * SLOT_SEVEN
  * SLOT_EIGHT
  * SLOT_NINE
  * SLOT_TEN
  * SLOT_ELEVEN
  * SLOT_TWELVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#auto_full_backup_window OracleDatabaseDbSystem#auto_full_backup_window}
  */
  readonly autoFullBackupWindow?: string;
  /**
  * The window in which the incremental backup should be performed on the
  * database. If no value is provided, the default is anytime except the auto
  * full backup day.
  * Possible values:
  * SLOT_ONE
  * SLOT_TWO
  * SLOT_THREE
  * SLOT_FOUR
  * SLOT_FIVE
  * SLOT_SIX
  * SLOT_SEVEN
  * SLOT_EIGHT
  * SLOT_NINE
  * SLOT_TEN
  * SLOT_ELEVEN
  * SLOT_TWELVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#auto_incremental_backup_window OracleDatabaseDbSystem#auto_incremental_backup_window}
  */
  readonly autoIncrementalBackupWindow?: string;
  /**
  * This defines when the backups will be deleted after Database termination.
  * Possible values:
  * DELETE_IMMEDIATELY
  * DELETE_AFTER_RETENTION_PERIOD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#backup_deletion_policy OracleDatabaseDbSystem#backup_deletion_policy}
  */
  readonly backupDeletionPolicy?: string;
  /**
  * The number of days an automatic backup is retained before being
  * automatically deleted. This value determines the earliest point in time to
  * which a database can be restored. Min: 1, Max: 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#retention_period_days OracleDatabaseDbSystem#retention_period_days}
  */
  readonly retentionPeriodDays?: number;
  /**
  * backup_destination_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#backup_destination_details OracleDatabaseDbSystem#backup_destination_details}
  */
  readonly backupDestinationDetails?: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails[] | cdktn.IResolvable;
}

export function oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigToTerraform(struct?: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference | OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_backup_enabled: cdktn.booleanToTerraform(struct!.autoBackupEnabled),
    auto_full_backup_day: cdktn.stringToTerraform(struct!.autoFullBackupDay),
    auto_full_backup_window: cdktn.stringToTerraform(struct!.autoFullBackupWindow),
    auto_incremental_backup_window: cdktn.stringToTerraform(struct!.autoIncrementalBackupWindow),
    backup_deletion_policy: cdktn.stringToTerraform(struct!.backupDeletionPolicy),
    retention_period_days: cdktn.numberToTerraform(struct!.retentionPeriodDays),
    backup_destination_details: cdktn.listMapper(oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsToTerraform, true)(struct!.backupDestinationDetails),
  }
}


export function oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigToHclTerraform(struct?: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference | OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_backup_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.autoBackupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_full_backup_day: {
      value: cdktn.stringToHclTerraform(struct!.autoFullBackupDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_full_backup_window: {
      value: cdktn.stringToHclTerraform(struct!.autoFullBackupWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_incremental_backup_window: {
      value: cdktn.stringToHclTerraform(struct!.autoIncrementalBackupWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_deletion_policy: {
      value: cdktn.stringToHclTerraform(struct!.backupDeletionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionPeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_destination_details: {
      value: cdktn.listMapperHcl(oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsToHclTerraform, true)(struct!.backupDestinationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoBackupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBackupEnabled = this._autoBackupEnabled;
    }
    if (this._autoFullBackupDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFullBackupDay = this._autoFullBackupDay;
    }
    if (this._autoFullBackupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFullBackupWindow = this._autoFullBackupWindow;
    }
    if (this._autoIncrementalBackupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoIncrementalBackupWindow = this._autoIncrementalBackupWindow;
    }
    if (this._backupDeletionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDeletionPolicy = this._backupDeletionPolicy;
    }
    if (this._retentionPeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodDays = this._retentionPeriodDays;
    }
    if (this._backupDestinationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDestinationDetails = this._backupDestinationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoBackupEnabled = undefined;
      this._autoFullBackupDay = undefined;
      this._autoFullBackupWindow = undefined;
      this._autoIncrementalBackupWindow = undefined;
      this._backupDeletionPolicy = undefined;
      this._retentionPeriodDays = undefined;
      this._backupDestinationDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoBackupEnabled = value.autoBackupEnabled;
      this._autoFullBackupDay = value.autoFullBackupDay;
      this._autoFullBackupWindow = value.autoFullBackupWindow;
      this._autoIncrementalBackupWindow = value.autoIncrementalBackupWindow;
      this._backupDeletionPolicy = value.backupDeletionPolicy;
      this._retentionPeriodDays = value.retentionPeriodDays;
      this._backupDestinationDetails.internalValue = value.backupDestinationDetails;
    }
  }

  // auto_backup_enabled - computed: false, optional: true, required: false
  private _autoBackupEnabled?: boolean | cdktn.IResolvable; 
  public get autoBackupEnabled() {
    return this.getBooleanAttribute('auto_backup_enabled');
  }
  public set autoBackupEnabled(value: boolean | cdktn.IResolvable) {
    this._autoBackupEnabled = value;
  }
  public resetAutoBackupEnabled() {
    this._autoBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupEnabledInput() {
    return this._autoBackupEnabled;
  }

  // auto_full_backup_day - computed: false, optional: true, required: false
  private _autoFullBackupDay?: string; 
  public get autoFullBackupDay() {
    return this.getStringAttribute('auto_full_backup_day');
  }
  public set autoFullBackupDay(value: string) {
    this._autoFullBackupDay = value;
  }
  public resetAutoFullBackupDay() {
    this._autoFullBackupDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFullBackupDayInput() {
    return this._autoFullBackupDay;
  }

  // auto_full_backup_window - computed: true, optional: true, required: false
  private _autoFullBackupWindow?: string; 
  public get autoFullBackupWindow() {
    return this.getStringAttribute('auto_full_backup_window');
  }
  public set autoFullBackupWindow(value: string) {
    this._autoFullBackupWindow = value;
  }
  public resetAutoFullBackupWindow() {
    this._autoFullBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFullBackupWindowInput() {
    return this._autoFullBackupWindow;
  }

  // auto_incremental_backup_window - computed: true, optional: true, required: false
  private _autoIncrementalBackupWindow?: string; 
  public get autoIncrementalBackupWindow() {
    return this.getStringAttribute('auto_incremental_backup_window');
  }
  public set autoIncrementalBackupWindow(value: string) {
    this._autoIncrementalBackupWindow = value;
  }
  public resetAutoIncrementalBackupWindow() {
    this._autoIncrementalBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementalBackupWindowInput() {
    return this._autoIncrementalBackupWindow;
  }

  // backup_deletion_policy - computed: true, optional: true, required: false
  private _backupDeletionPolicy?: string; 
  public get backupDeletionPolicy() {
    return this.getStringAttribute('backup_deletion_policy');
  }
  public set backupDeletionPolicy(value: string) {
    this._backupDeletionPolicy = value;
  }
  public resetBackupDeletionPolicy() {
    this._backupDeletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDeletionPolicyInput() {
    return this._backupDeletionPolicy;
  }

  // retention_period_days - computed: true, optional: true, required: false
  private _retentionPeriodDays?: number; 
  public get retentionPeriodDays() {
    return this.getNumberAttribute('retention_period_days');
  }
  public set retentionPeriodDays(value: number) {
    this._retentionPeriodDays = value;
  }
  public resetRetentionPeriodDays() {
    this._retentionPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodDaysInput() {
    return this._retentionPeriodDays;
  }

  // backup_destination_details - computed: false, optional: true, required: false
  private _backupDestinationDetails = new OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList(this, "backup_destination_details", false);
  public get backupDestinationDetails() {
    return this._backupDestinationDetails;
  }
  public putBackupDestinationDetails(value: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails[] | cdktn.IResolvable) {
    this._backupDestinationDetails.internalValue = value;
  }
  public resetBackupDestinationDetails() {
    this._backupDestinationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDestinationDetailsInput() {
    return this._backupDestinationDetails.internalValue;
  }
}
export interface OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties {
  /**
  * The Oracle Database version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#db_version OracleDatabaseDbSystem#db_version}
  */
  readonly dbVersion: string;
  /**
  * database_management_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#database_management_config OracleDatabaseDbSystem#database_management_config}
  */
  readonly databaseManagementConfig?: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig;
  /**
  * db_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#db_backup_config OracleDatabaseDbSystem#db_backup_config}
  */
  readonly dbBackupConfig?: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig;
}

export function oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesToTerraform(struct?: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference | OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_version: cdktn.stringToTerraform(struct!.dbVersion),
    database_management_config: oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigToTerraform(struct!.databaseManagementConfig),
    db_backup_config: oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigToTerraform(struct!.dbBackupConfig),
  }
}


export function oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesToHclTerraform(struct?: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference | OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_version: {
      value: cdktn.stringToHclTerraform(struct!.dbVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_management_config: {
      value: oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigToHclTerraform(struct!.databaseManagementConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigList",
    },
    db_backup_config: {
      value: oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigToHclTerraform(struct!.dbBackupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbVersion = this._dbVersion;
    }
    if (this._databaseManagementConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseManagementConfig = this._databaseManagementConfig?.internalValue;
    }
    if (this._dbBackupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbBackupConfig = this._dbBackupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbVersion = undefined;
      this._databaseManagementConfig.internalValue = undefined;
      this._dbBackupConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbVersion = value.dbVersion;
      this._databaseManagementConfig.internalValue = value.databaseManagementConfig;
      this._dbBackupConfig.internalValue = value.dbBackupConfig;
    }
  }

  // db_version - computed: false, optional: false, required: true
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // database_management_config - computed: false, optional: true, required: false
  private _databaseManagementConfig = new OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference(this, "database_management_config");
  public get databaseManagementConfig() {
    return this._databaseManagementConfig;
  }
  public putDatabaseManagementConfig(value: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig) {
    this._databaseManagementConfig.internalValue = value;
  }
  public resetDatabaseManagementConfig() {
    this._databaseManagementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseManagementConfigInput() {
    return this._databaseManagementConfig.internalValue;
  }

  // db_backup_config - computed: false, optional: true, required: false
  private _dbBackupConfig = new OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference(this, "db_backup_config");
  public get dbBackupConfig() {
    return this._dbBackupConfig;
  }
  public putDbBackupConfig(value: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig) {
    this._dbBackupConfig.internalValue = value;
  }
  public resetDbBackupConfig() {
    this._dbBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbBackupConfigInput() {
    return this._dbBackupConfig.internalValue;
  }
}
export interface OracleDatabaseDbSystemPropertiesDbHomeDatabase {
  /**
  * The password for the default ADMIN user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#admin_password OracleDatabaseDbSystem#admin_password}
  */
  readonly adminPassword: string;
  /**
  * The character set for the database. The default is AL32UTF8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#character_set OracleDatabaseDbSystem#character_set}
  */
  readonly characterSet?: string;
  /**
  * The database ID of the Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#database_id OracleDatabaseDbSystem#database_id}
  */
  readonly databaseId: string;
  /**
  * The name of the DbHome resource associated with the Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#db_home_name OracleDatabaseDbSystem#db_home_name}
  */
  readonly dbHomeName?: string;
  /**
  * The database name. The name must begin with an alphabetic character and can
  * contain a maximum of eight alphanumeric characters. Special characters are
  * not permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#db_name OracleDatabaseDbSystem#db_name}
  */
  readonly dbName?: string;
  /**
  * The DB_UNIQUE_NAME of the Oracle Database being backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#db_unique_name OracleDatabaseDbSystem#db_unique_name}
  */
  readonly dbUniqueName?: string;
  /**
  * The GCP Oracle zone where the Database is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#gcp_oracle_zone OracleDatabaseDbSystem#gcp_oracle_zone}
  */
  readonly gcpOracleZone?: string;
  /**
  * The national character set for the database. The default is AL16UTF16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#ncharacter_set OracleDatabaseDbSystem#ncharacter_set}
  */
  readonly ncharacterSet?: string;
  /**
  * The ID of the pluggable database associated with Database. The ID must be unique within the project and location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#pluggable_database_id OracleDatabaseDbSystem#pluggable_database_id}
  */
  readonly pluggableDatabaseId?: string;
  /**
  * The pluggable dataabse associated with the Database. The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#pluggable_database_name OracleDatabaseDbSystem#pluggable_database_name}
  */
  readonly pluggableDatabaseName?: string;
  /**
  * The TDE wallet password for the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#tde_wallet_password OracleDatabaseDbSystem#tde_wallet_password}
  */
  readonly tdeWalletPassword?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#properties OracleDatabaseDbSystem#properties}
  */
  readonly properties?: OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties;
}

export function oracleDatabaseDbSystemPropertiesDbHomeDatabaseToTerraform(struct?: OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference | OracleDatabaseDbSystemPropertiesDbHomeDatabase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktn.stringToTerraform(struct!.adminPassword),
    character_set: cdktn.stringToTerraform(struct!.characterSet),
    database_id: cdktn.stringToTerraform(struct!.databaseId),
    db_home_name: cdktn.stringToTerraform(struct!.dbHomeName),
    db_name: cdktn.stringToTerraform(struct!.dbName),
    db_unique_name: cdktn.stringToTerraform(struct!.dbUniqueName),
    gcp_oracle_zone: cdktn.stringToTerraform(struct!.gcpOracleZone),
    ncharacter_set: cdktn.stringToTerraform(struct!.ncharacterSet),
    pluggable_database_id: cdktn.stringToTerraform(struct!.pluggableDatabaseId),
    pluggable_database_name: cdktn.stringToTerraform(struct!.pluggableDatabaseName),
    tde_wallet_password: cdktn.stringToTerraform(struct!.tdeWalletPassword),
    properties: oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesToTerraform(struct!.properties),
  }
}


export function oracleDatabaseDbSystemPropertiesDbHomeDatabaseToHclTerraform(struct?: OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference | OracleDatabaseDbSystemPropertiesDbHomeDatabase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktn.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    character_set: {
      value: cdktn.stringToHclTerraform(struct!.characterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_id: {
      value: cdktn.stringToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_home_name: {
      value: cdktn.stringToHclTerraform(struct!.dbHomeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktn.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_unique_name: {
      value: cdktn.stringToHclTerraform(struct!.dbUniqueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_oracle_zone: {
      value: cdktn.stringToHclTerraform(struct!.gcpOracleZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ncharacter_set: {
      value: cdktn.stringToHclTerraform(struct!.ncharacterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pluggable_database_id: {
      value: cdktn.stringToHclTerraform(struct!.pluggableDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pluggable_database_name: {
      value: cdktn.stringToHclTerraform(struct!.pluggableDatabaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tde_wallet_password: {
      value: cdktn.stringToHclTerraform(struct!.tdeWalletPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseDbSystemPropertiesDbHomeDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._characterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSet = this._characterSet;
    }
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._dbHomeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbHomeName = this._dbHomeName;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._dbUniqueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUniqueName = this._dbUniqueName;
    }
    if (this._gcpOracleZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpOracleZone = this._gcpOracleZone;
    }
    if (this._ncharacterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncharacterSet = this._ncharacterSet;
    }
    if (this._pluggableDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluggableDatabaseId = this._pluggableDatabaseId;
    }
    if (this._pluggableDatabaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluggableDatabaseName = this._pluggableDatabaseName;
    }
    if (this._tdeWalletPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.tdeWalletPassword = this._tdeWalletPassword;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseDbSystemPropertiesDbHomeDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._characterSet = undefined;
      this._databaseId = undefined;
      this._dbHomeName = undefined;
      this._dbName = undefined;
      this._dbUniqueName = undefined;
      this._gcpOracleZone = undefined;
      this._ncharacterSet = undefined;
      this._pluggableDatabaseId = undefined;
      this._pluggableDatabaseName = undefined;
      this._tdeWalletPassword = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._characterSet = value.characterSet;
      this._databaseId = value.databaseId;
      this._dbHomeName = value.dbHomeName;
      this._dbName = value.dbName;
      this._dbUniqueName = value.dbUniqueName;
      this._gcpOracleZone = value.gcpOracleZone;
      this._ncharacterSet = value.ncharacterSet;
      this._pluggableDatabaseId = value.pluggableDatabaseId;
      this._pluggableDatabaseName = value.pluggableDatabaseName;
      this._tdeWalletPassword = value.tdeWalletPassword;
      this._properties.internalValue = value.properties;
    }
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // character_set - computed: true, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // db_home_name - computed: true, optional: true, required: false
  private _dbHomeName?: string; 
  public get dbHomeName() {
    return this.getStringAttribute('db_home_name');
  }
  public set dbHomeName(value: string) {
    this._dbHomeName = value;
  }
  public resetDbHomeName() {
    this._dbHomeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbHomeNameInput() {
    return this._dbHomeName;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_unique_name - computed: true, optional: true, required: false
  private _dbUniqueName?: string; 
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }
  public set dbUniqueName(value: string) {
    this._dbUniqueName = value;
  }
  public resetDbUniqueName() {
    this._dbUniqueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUniqueNameInput() {
    return this._dbUniqueName;
  }

  // gcp_oracle_zone - computed: true, optional: true, required: false
  private _gcpOracleZone?: string; 
  public get gcpOracleZone() {
    return this.getStringAttribute('gcp_oracle_zone');
  }
  public set gcpOracleZone(value: string) {
    this._gcpOracleZone = value;
  }
  public resetGcpOracleZone() {
    this._gcpOracleZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpOracleZoneInput() {
    return this._gcpOracleZone;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ncharacter_set - computed: true, optional: true, required: false
  private _ncharacterSet?: string; 
  public get ncharacterSet() {
    return this.getStringAttribute('ncharacter_set');
  }
  public set ncharacterSet(value: string) {
    this._ncharacterSet = value;
  }
  public resetNcharacterSet() {
    this._ncharacterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncharacterSetInput() {
    return this._ncharacterSet;
  }

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // ops_insights_status - computed: true, optional: false, required: false
  public get opsInsightsStatus() {
    return this.getStringAttribute('ops_insights_status');
  }

  // pluggable_database_id - computed: true, optional: true, required: false
  private _pluggableDatabaseId?: string; 
  public get pluggableDatabaseId() {
    return this.getStringAttribute('pluggable_database_id');
  }
  public set pluggableDatabaseId(value: string) {
    this._pluggableDatabaseId = value;
  }
  public resetPluggableDatabaseId() {
    this._pluggableDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluggableDatabaseIdInput() {
    return this._pluggableDatabaseId;
  }

  // pluggable_database_name - computed: true, optional: true, required: false
  private _pluggableDatabaseName?: string; 
  public get pluggableDatabaseName() {
    return this.getStringAttribute('pluggable_database_name');
  }
  public set pluggableDatabaseName(value: string) {
    this._pluggableDatabaseName = value;
  }
  public resetPluggableDatabaseName() {
    this._pluggableDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluggableDatabaseNameInput() {
    return this._pluggableDatabaseName;
  }

  // tde_wallet_password - computed: false, optional: true, required: false
  private _tdeWalletPassword?: string; 
  public get tdeWalletPassword() {
    return this.getStringAttribute('tde_wallet_password');
  }
  public set tdeWalletPassword(value: string) {
    this._tdeWalletPassword = value;
  }
  public resetTdeWalletPassword() {
    this._tdeWalletPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeWalletPasswordInput() {
    return this._tdeWalletPassword;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface OracleDatabaseDbSystemPropertiesDbHome {
  /**
  * A valid Oracle Database version. For a list of supported versions, use the
  * ListDbVersions operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#db_version OracleDatabaseDbSystem#db_version}
  */
  readonly dbVersion: string;
  /**
  * The display name for the Database Home. The name does not have to
  * be unique within your project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#display_name OracleDatabaseDbSystem#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether unified auditing is enabled for the Database Home.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#is_unified_auditing_enabled OracleDatabaseDbSystem#is_unified_auditing_enabled}
  */
  readonly isUnifiedAuditingEnabled?: boolean | cdktn.IResolvable;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#database OracleDatabaseDbSystem#database}
  */
  readonly database: OracleDatabaseDbSystemPropertiesDbHomeDatabase;
}

export function oracleDatabaseDbSystemPropertiesDbHomeToTerraform(struct?: OracleDatabaseDbSystemPropertiesDbHomeOutputReference | OracleDatabaseDbSystemPropertiesDbHome): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_version: cdktn.stringToTerraform(struct!.dbVersion),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    is_unified_auditing_enabled: cdktn.booleanToTerraform(struct!.isUnifiedAuditingEnabled),
    database: oracleDatabaseDbSystemPropertiesDbHomeDatabaseToTerraform(struct!.database),
  }
}


export function oracleDatabaseDbSystemPropertiesDbHomeToHclTerraform(struct?: OracleDatabaseDbSystemPropertiesDbHomeOutputReference | OracleDatabaseDbSystemPropertiesDbHome): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_version: {
      value: cdktn.stringToHclTerraform(struct!.dbVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_unified_auditing_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isUnifiedAuditingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database: {
      value: oracleDatabaseDbSystemPropertiesDbHomeDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseDbSystemPropertiesDbHomeDatabaseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseDbSystemPropertiesDbHomeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseDbSystemPropertiesDbHome | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbVersion = this._dbVersion;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isUnifiedAuditingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUnifiedAuditingEnabled = this._isUnifiedAuditingEnabled;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseDbSystemPropertiesDbHome | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbVersion = undefined;
      this._displayName = undefined;
      this._isUnifiedAuditingEnabled = undefined;
      this._database.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbVersion = value.dbVersion;
      this._displayName = value.displayName;
      this._isUnifiedAuditingEnabled = value.isUnifiedAuditingEnabled;
      this._database.internalValue = value.database;
    }
  }

  // db_version - computed: false, optional: false, required: true
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
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

  // is_unified_auditing_enabled - computed: true, optional: true, required: false
  private _isUnifiedAuditingEnabled?: boolean | cdktn.IResolvable; 
  public get isUnifiedAuditingEnabled() {
    return this.getBooleanAttribute('is_unified_auditing_enabled');
  }
  public set isUnifiedAuditingEnabled(value: boolean | cdktn.IResolvable) {
    this._isUnifiedAuditingEnabled = value;
  }
  public resetIsUnifiedAuditingEnabled() {
    this._isUnifiedAuditingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUnifiedAuditingEnabledInput() {
    return this._isUnifiedAuditingEnabled;
  }

  // database - computed: false, optional: false, required: true
  private _database = new OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: OracleDatabaseDbSystemPropertiesDbHomeDatabase) {
    this._database.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }
}
export interface OracleDatabaseDbSystemPropertiesDbSystemOptions {
  /**
  * The storage option used in DB system.
  * Possible values:
  * ASM
  * LVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#storage_management OracleDatabaseDbSystem#storage_management}
  */
  readonly storageManagement?: string;
}

export function oracleDatabaseDbSystemPropertiesDbSystemOptionsToTerraform(struct?: OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference | OracleDatabaseDbSystemPropertiesDbSystemOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_management: cdktn.stringToTerraform(struct!.storageManagement),
  }
}


export function oracleDatabaseDbSystemPropertiesDbSystemOptionsToHclTerraform(struct?: OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference | OracleDatabaseDbSystemPropertiesDbSystemOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_management: {
      value: cdktn.stringToHclTerraform(struct!.storageManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseDbSystemPropertiesDbSystemOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageManagement = this._storageManagement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseDbSystemPropertiesDbSystemOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageManagement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageManagement = value.storageManagement;
    }
  }

  // storage_management - computed: true, optional: true, required: false
  private _storageManagement?: string; 
  public get storageManagement() {
    return this.getStringAttribute('storage_management');
  }
  public set storageManagement(value: string) {
    this._storageManagement = value;
  }
  public resetStorageManagement() {
    this._storageManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageManagementInput() {
    return this._storageManagement;
  }
}
export interface OracleDatabaseDbSystemPropertiesTimeZone {
  /**
  * IANA Time Zone Database time zone. For example "America/New_York".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#id OracleDatabaseDbSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function oracleDatabaseDbSystemPropertiesTimeZoneToTerraform(struct?: OracleDatabaseDbSystemPropertiesTimeZoneOutputReference | OracleDatabaseDbSystemPropertiesTimeZone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function oracleDatabaseDbSystemPropertiesTimeZoneToHclTerraform(struct?: OracleDatabaseDbSystemPropertiesTimeZoneOutputReference | OracleDatabaseDbSystemPropertiesTimeZone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseDbSystemPropertiesTimeZoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseDbSystemPropertiesTimeZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseDbSystemPropertiesTimeZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
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
}
export interface OracleDatabaseDbSystemProperties {
  /**
  * The number of CPU cores to enable for the DbSystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#compute_count OracleDatabaseDbSystem#compute_count}
  */
  readonly computeCount: number;
  /**
  * The compute model of the DbSystem.
  * Possible values:
  * ECPU
  * OCPU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#compute_model OracleDatabaseDbSystem#compute_model}
  */
  readonly computeModel?: string;
  /**
  * The data storage size in GB that is currently available to DbSystems.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#data_storage_size_gb OracleDatabaseDbSystem#data_storage_size_gb}
  */
  readonly dataStorageSizeGb?: number;
  /**
  * The database edition of the DbSystem.
  * Possible values:
  * STANDARD_EDITION
  * ENTERPRISE_EDITION
  * ENTERPRISE_EDITION_HIGH_PERFORMANCE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#database_edition OracleDatabaseDbSystem#database_edition}
  */
  readonly databaseEdition: string;
  /**
  * The host domain name of the DbSystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#domain OracleDatabaseDbSystem#domain}
  */
  readonly domain?: string;
  /**
  * Prefix for DB System host names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#hostname_prefix OracleDatabaseDbSystem#hostname_prefix}
  */
  readonly hostnamePrefix?: string;
  /**
  * The initial data storage size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#initial_data_storage_size_gb OracleDatabaseDbSystem#initial_data_storage_size_gb}
  */
  readonly initialDataStorageSizeGb: number;
  /**
  * The license model of the DbSystem.
  * Possible values:
  * LICENSE_INCLUDED
  * BRING_YOUR_OWN_LICENSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#license_model OracleDatabaseDbSystem#license_model}
  */
  readonly licenseModel: string;
  /**
  * The memory size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#memory_size_gb OracleDatabaseDbSystem#memory_size_gb}
  */
  readonly memorySizeGb?: number;
  /**
  * The number of nodes in the DbSystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#node_count OracleDatabaseDbSystem#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The private IP address of the DbSystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#private_ip OracleDatabaseDbSystem#private_ip}
  */
  readonly privateIp?: string;
  /**
  * The reco/redo storage size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#reco_storage_size_gb OracleDatabaseDbSystem#reco_storage_size_gb}
  */
  readonly recoStorageSizeGb?: number;
  /**
  * Shape of DB System.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#shape OracleDatabaseDbSystem#shape}
  */
  readonly shape: string;
  /**
  * SSH public keys to be stored with the DbSystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#ssh_public_keys OracleDatabaseDbSystem#ssh_public_keys}
  */
  readonly sshPublicKeys: string[];
  /**
  * data_collection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#data_collection_options OracleDatabaseDbSystem#data_collection_options}
  */
  readonly dataCollectionOptions?: OracleDatabaseDbSystemPropertiesDataCollectionOptions;
  /**
  * db_home block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#db_home OracleDatabaseDbSystem#db_home}
  */
  readonly dbHome?: OracleDatabaseDbSystemPropertiesDbHome;
  /**
  * db_system_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#db_system_options OracleDatabaseDbSystem#db_system_options}
  */
  readonly dbSystemOptions?: OracleDatabaseDbSystemPropertiesDbSystemOptions;
  /**
  * time_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#time_zone OracleDatabaseDbSystem#time_zone}
  */
  readonly timeZone?: OracleDatabaseDbSystemPropertiesTimeZone;
}

export function oracleDatabaseDbSystemPropertiesToTerraform(struct?: OracleDatabaseDbSystemPropertiesOutputReference | OracleDatabaseDbSystemProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_count: cdktn.numberToTerraform(struct!.computeCount),
    compute_model: cdktn.stringToTerraform(struct!.computeModel),
    data_storage_size_gb: cdktn.numberToTerraform(struct!.dataStorageSizeGb),
    database_edition: cdktn.stringToTerraform(struct!.databaseEdition),
    domain: cdktn.stringToTerraform(struct!.domain),
    hostname_prefix: cdktn.stringToTerraform(struct!.hostnamePrefix),
    initial_data_storage_size_gb: cdktn.numberToTerraform(struct!.initialDataStorageSizeGb),
    license_model: cdktn.stringToTerraform(struct!.licenseModel),
    memory_size_gb: cdktn.numberToTerraform(struct!.memorySizeGb),
    node_count: cdktn.numberToTerraform(struct!.nodeCount),
    private_ip: cdktn.stringToTerraform(struct!.privateIp),
    reco_storage_size_gb: cdktn.numberToTerraform(struct!.recoStorageSizeGb),
    shape: cdktn.stringToTerraform(struct!.shape),
    ssh_public_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sshPublicKeys),
    data_collection_options: oracleDatabaseDbSystemPropertiesDataCollectionOptionsToTerraform(struct!.dataCollectionOptions),
    db_home: oracleDatabaseDbSystemPropertiesDbHomeToTerraform(struct!.dbHome),
    db_system_options: oracleDatabaseDbSystemPropertiesDbSystemOptionsToTerraform(struct!.dbSystemOptions),
    time_zone: oracleDatabaseDbSystemPropertiesTimeZoneToTerraform(struct!.timeZone),
  }
}


export function oracleDatabaseDbSystemPropertiesToHclTerraform(struct?: OracleDatabaseDbSystemPropertiesOutputReference | OracleDatabaseDbSystemProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_count: {
      value: cdktn.numberToHclTerraform(struct!.computeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compute_model: {
      value: cdktn.stringToHclTerraform(struct!.computeModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_storage_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.dataStorageSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    database_edition: {
      value: cdktn.stringToHclTerraform(struct!.databaseEdition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_prefix: {
      value: cdktn.stringToHclTerraform(struct!.hostnamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_data_storage_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.initialDataStorageSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    license_model: {
      value: cdktn.stringToHclTerraform(struct!.licenseModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.memorySizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_count: {
      value: cdktn.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_ip: {
      value: cdktn.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reco_storage_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.recoStorageSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape: {
      value: cdktn.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sshPublicKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_collection_options: {
      value: oracleDatabaseDbSystemPropertiesDataCollectionOptionsToHclTerraform(struct!.dataCollectionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseDbSystemPropertiesDataCollectionOptionsList",
    },
    db_home: {
      value: oracleDatabaseDbSystemPropertiesDbHomeToHclTerraform(struct!.dbHome),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseDbSystemPropertiesDbHomeList",
    },
    db_system_options: {
      value: oracleDatabaseDbSystemPropertiesDbSystemOptionsToHclTerraform(struct!.dbSystemOptions),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseDbSystemPropertiesDbSystemOptionsList",
    },
    time_zone: {
      value: oracleDatabaseDbSystemPropertiesTimeZoneToHclTerraform(struct!.timeZone),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseDbSystemPropertiesTimeZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseDbSystemPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseDbSystemProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeCount = this._computeCount;
    }
    if (this._computeModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeModel = this._computeModel;
    }
    if (this._dataStorageSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStorageSizeGb = this._dataStorageSizeGb;
    }
    if (this._databaseEdition !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseEdition = this._databaseEdition;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._hostnamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnamePrefix = this._hostnamePrefix;
    }
    if (this._initialDataStorageSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDataStorageSizeGb = this._initialDataStorageSizeGb;
    }
    if (this._licenseModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseModel = this._licenseModel;
    }
    if (this._memorySizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeGb = this._memorySizeGb;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._recoStorageSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoStorageSizeGb = this._recoStorageSizeGb;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._dataCollectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCollectionOptions = this._dataCollectionOptions?.internalValue;
    }
    if (this._dbHome?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbHome = this._dbHome?.internalValue;
    }
    if (this._dbSystemOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSystemOptions = this._dbSystemOptions?.internalValue;
    }
    if (this._timeZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseDbSystemProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeCount = undefined;
      this._computeModel = undefined;
      this._dataStorageSizeGb = undefined;
      this._databaseEdition = undefined;
      this._domain = undefined;
      this._hostnamePrefix = undefined;
      this._initialDataStorageSizeGb = undefined;
      this._licenseModel = undefined;
      this._memorySizeGb = undefined;
      this._nodeCount = undefined;
      this._privateIp = undefined;
      this._recoStorageSizeGb = undefined;
      this._shape = undefined;
      this._sshPublicKeys = undefined;
      this._dataCollectionOptions.internalValue = undefined;
      this._dbHome.internalValue = undefined;
      this._dbSystemOptions.internalValue = undefined;
      this._timeZone.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeCount = value.computeCount;
      this._computeModel = value.computeModel;
      this._dataStorageSizeGb = value.dataStorageSizeGb;
      this._databaseEdition = value.databaseEdition;
      this._domain = value.domain;
      this._hostnamePrefix = value.hostnamePrefix;
      this._initialDataStorageSizeGb = value.initialDataStorageSizeGb;
      this._licenseModel = value.licenseModel;
      this._memorySizeGb = value.memorySizeGb;
      this._nodeCount = value.nodeCount;
      this._privateIp = value.privateIp;
      this._recoStorageSizeGb = value.recoStorageSizeGb;
      this._shape = value.shape;
      this._sshPublicKeys = value.sshPublicKeys;
      this._dataCollectionOptions.internalValue = value.dataCollectionOptions;
      this._dbHome.internalValue = value.dbHome;
      this._dbSystemOptions.internalValue = value.dbSystemOptions;
      this._timeZone.internalValue = value.timeZone;
    }
  }

  // compute_count - computed: false, optional: false, required: true
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // compute_model - computed: true, optional: true, required: false
  private _computeModel?: string; 
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }
  public set computeModel(value: string) {
    this._computeModel = value;
  }
  public resetComputeModel() {
    this._computeModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeModelInput() {
    return this._computeModel;
  }

  // data_storage_size_gb - computed: true, optional: true, required: false
  private _dataStorageSizeGb?: number; 
  public get dataStorageSizeGb() {
    return this.getNumberAttribute('data_storage_size_gb');
  }
  public set dataStorageSizeGb(value: number) {
    this._dataStorageSizeGb = value;
  }
  public resetDataStorageSizeGb() {
    this._dataStorageSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeGbInput() {
    return this._dataStorageSizeGb;
  }

  // database_edition - computed: false, optional: false, required: true
  private _databaseEdition?: string; 
  public get databaseEdition() {
    return this.getStringAttribute('database_edition');
  }
  public set databaseEdition(value: string) {
    this._databaseEdition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEditionInput() {
    return this._databaseEdition;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // hostname_prefix - computed: false, optional: true, required: false
  private _hostnamePrefix?: string; 
  public get hostnamePrefix() {
    return this.getStringAttribute('hostname_prefix');
  }
  public set hostnamePrefix(value: string) {
    this._hostnamePrefix = value;
  }
  public resetHostnamePrefix() {
    this._hostnamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamePrefixInput() {
    return this._hostnamePrefix;
  }

  // initial_data_storage_size_gb - computed: false, optional: false, required: true
  private _initialDataStorageSizeGb?: number; 
  public get initialDataStorageSizeGb() {
    return this.getNumberAttribute('initial_data_storage_size_gb');
  }
  public set initialDataStorageSizeGb(value: number) {
    this._initialDataStorageSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDataStorageSizeGbInput() {
    return this._initialDataStorageSizeGb;
  }

  // license_model - computed: false, optional: false, required: true
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // memory_size_gb - computed: true, optional: true, required: false
  private _memorySizeGb?: number; 
  public get memorySizeGb() {
    return this.getNumberAttribute('memory_size_gb');
  }
  public set memorySizeGb(value: number) {
    this._memorySizeGb = value;
  }
  public resetMemorySizeGb() {
    this._memorySizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeGbInput() {
    return this._memorySizeGb;
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // reco_storage_size_gb - computed: true, optional: true, required: false
  private _recoStorageSizeGb?: number; 
  public get recoStorageSizeGb() {
    return this.getNumberAttribute('reco_storage_size_gb');
  }
  public set recoStorageSizeGb(value: number) {
    this._recoStorageSizeGb = value;
  }
  public resetRecoStorageSizeGb() {
    this._recoStorageSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoStorageSizeGbInput() {
    return this._recoStorageSizeGb;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // ssh_public_keys - computed: false, optional: false, required: true
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // data_collection_options - computed: false, optional: true, required: false
  private _dataCollectionOptions = new OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference(this, "data_collection_options");
  public get dataCollectionOptions() {
    return this._dataCollectionOptions;
  }
  public putDataCollectionOptions(value: OracleDatabaseDbSystemPropertiesDataCollectionOptions) {
    this._dataCollectionOptions.internalValue = value;
  }
  public resetDataCollectionOptions() {
    this._dataCollectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionOptionsInput() {
    return this._dataCollectionOptions.internalValue;
  }

  // db_home - computed: false, optional: true, required: false
  private _dbHome = new OracleDatabaseDbSystemPropertiesDbHomeOutputReference(this, "db_home");
  public get dbHome() {
    return this._dbHome;
  }
  public putDbHome(value: OracleDatabaseDbSystemPropertiesDbHome) {
    this._dbHome.internalValue = value;
  }
  public resetDbHome() {
    this._dbHome.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbHomeInput() {
    return this._dbHome.internalValue;
  }

  // db_system_options - computed: false, optional: true, required: false
  private _dbSystemOptions = new OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference(this, "db_system_options");
  public get dbSystemOptions() {
    return this._dbSystemOptions;
  }
  public putDbSystemOptions(value: OracleDatabaseDbSystemPropertiesDbSystemOptions) {
    this._dbSystemOptions.internalValue = value;
  }
  public resetDbSystemOptions() {
    this._dbSystemOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemOptionsInput() {
    return this._dbSystemOptions.internalValue;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone = new OracleDatabaseDbSystemPropertiesTimeZoneOutputReference(this, "time_zone");
  public get timeZone() {
    return this._timeZone;
  }
  public putTimeZone(value: OracleDatabaseDbSystemPropertiesTimeZone) {
    this._timeZone.internalValue = value;
  }
  public resetTimeZone() {
    this._timeZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone.internalValue;
  }
}
export interface OracleDatabaseDbSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#create OracleDatabaseDbSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#delete OracleDatabaseDbSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#update OracleDatabaseDbSystem#update}
  */
  readonly update?: string;
}

export function oracleDatabaseDbSystemTimeoutsToTerraform(struct?: OracleDatabaseDbSystemTimeouts | cdktn.IResolvable): any {
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


export function oracleDatabaseDbSystemTimeoutsToHclTerraform(struct?: OracleDatabaseDbSystemTimeouts | cdktn.IResolvable): any {
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

export class OracleDatabaseDbSystemTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OracleDatabaseDbSystemTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OracleDatabaseDbSystemTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system google_oracle_database_db_system}
*/
export class OracleDatabaseDbSystem extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_oracle_database_db_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OracleDatabaseDbSystem resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OracleDatabaseDbSystem to import
  * @param importFromId The id of the existing OracleDatabaseDbSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OracleDatabaseDbSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_oracle_database_db_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_db_system google_oracle_database_db_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OracleDatabaseDbSystemConfig
  */
  public constructor(scope: Construct, id: string, config: OracleDatabaseDbSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'google_oracle_database_db_system',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.32.0',
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
    this._dbSystemId = config.dbSystemId;
    this._deletionProtection = config.deletionProtection;
    this._displayName = config.displayName;
    this._gcpOracleZone = config.gcpOracleZone;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._odbNetwork = config.odbNetwork;
    this._odbSubnet = config.odbSubnet;
    this._project = config.project;
    this._properties.internalValue = config.properties;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_system_id - computed: false, optional: false, required: true
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktn.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktn.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // entitlement_id - computed: true, optional: false, required: false
  public get entitlementId() {
    return this.getStringAttribute('entitlement_id');
  }

  // gcp_oracle_zone - computed: true, optional: true, required: false
  private _gcpOracleZone?: string; 
  public get gcpOracleZone() {
    return this.getStringAttribute('gcp_oracle_zone');
  }
  public set gcpOracleZone(value: string) {
    this._gcpOracleZone = value;
  }
  public resetGcpOracleZone() {
    this._gcpOracleZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpOracleZoneInput() {
    return this._gcpOracleZone;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // odb_network - computed: false, optional: true, required: false
  private _odbNetwork?: string; 
  public get odbNetwork() {
    return this.getStringAttribute('odb_network');
  }
  public set odbNetwork(value: string) {
    this._odbNetwork = value;
  }
  public resetOdbNetwork() {
    this._odbNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbNetworkInput() {
    return this._odbNetwork;
  }

  // odb_subnet - computed: false, optional: false, required: true
  private _odbSubnet?: string; 
  public get odbSubnet() {
    return this.getStringAttribute('odb_subnet');
  }
  public set odbSubnet(value: string) {
    this._odbSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get odbSubnetInput() {
    return this._odbSubnet;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new OracleDatabaseDbSystemPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OracleDatabaseDbSystemProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OracleDatabaseDbSystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OracleDatabaseDbSystemTimeouts) {
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
      db_system_id: cdktn.stringToTerraform(this._dbSystemId),
      deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
      display_name: cdktn.stringToTerraform(this._displayName),
      gcp_oracle_zone: cdktn.stringToTerraform(this._gcpOracleZone),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      odb_network: cdktn.stringToTerraform(this._odbNetwork),
      odb_subnet: cdktn.stringToTerraform(this._odbSubnet),
      project: cdktn.stringToTerraform(this._project),
      properties: oracleDatabaseDbSystemPropertiesToTerraform(this._properties.internalValue),
      timeouts: oracleDatabaseDbSystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_system_id: {
        value: cdktn.stringToHclTerraform(this._dbSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktn.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_oracle_zone: {
        value: cdktn.stringToHclTerraform(this._gcpOracleZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      odb_network: {
        value: cdktn.stringToHclTerraform(this._odbNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      odb_subnet: {
        value: cdktn.stringToHclTerraform(this._odbSubnet),
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
      properties: {
        value: oracleDatabaseDbSystemPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleDatabaseDbSystemPropertiesList",
      },
      timeouts: {
        value: oracleDatabaseDbSystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OracleDatabaseDbSystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
