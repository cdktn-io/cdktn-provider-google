/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OracleDatabaseExadbVmClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the backup OdbSubnet associated with the ExadbVmCluster.
  * Format:
  * projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#backup_odb_subnet OracleDatabaseExadbVmCluster#backup_odb_subnet}
  */
  readonly backupOdbSubnet: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#deletion_policy OracleDatabaseExadbVmCluster#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Whether or not to allow Terraform to destroy the instance. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#deletion_protection OracleDatabaseExadbVmCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktn.IResolvable;
  /**
  * The display name for the ExadbVmCluster. The name does not have to
  * be unique within your project. The name must be 1-255 characters long and
  * can only contain alphanumeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#display_name OracleDatabaseExadbVmCluster#display_name}
  */
  readonly displayName: string;
  /**
  * The ID of the ExadbVmCluster to create. This value is
  * restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of
  * 63 characters in length. The value must start with a letter and end with a
  * letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#exadb_vm_cluster_id OracleDatabaseExadbVmCluster#exadb_vm_cluster_id}
  */
  readonly exadbVmClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels or tags associated with the ExadbVmCluster.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#labels OracleDatabaseExadbVmCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#location OracleDatabaseExadbVmCluster#location}
  */
  readonly location: string;
  /**
  * The name of the OdbNetwork associated with the ExadbVmCluster.
  * Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
  * It is optional but if specified, this should match the parent ODBNetwork of
  * the OdbSubnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#odb_network OracleDatabaseExadbVmCluster#odb_network}
  */
  readonly odbNetwork?: string;
  /**
  * The name of the OdbSubnet associated with the ExadbVmCluster for IP
  * allocation. Format:
  * projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#odb_subnet OracleDatabaseExadbVmCluster#odb_subnet}
  */
  readonly odbSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}
  */
  readonly project?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#properties OracleDatabaseExadbVmCluster#properties}
  */
  readonly properties: OracleDatabaseExadbVmClusterProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#timeouts OracleDatabaseExadbVmCluster#timeouts}
  */
  readonly timeouts?: OracleDatabaseExadbVmClusterTimeouts;
}
export interface OracleDatabaseExadbVmClusterIdentityConnector {
}

export function oracleDatabaseExadbVmClusterIdentityConnectorToTerraform(struct?: OracleDatabaseExadbVmClusterIdentityConnector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function oracleDatabaseExadbVmClusterIdentityConnectorToHclTerraform(struct?: OracleDatabaseExadbVmClusterIdentityConnector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseExadbVmClusterIdentityConnectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDatabaseExadbVmClusterIdentityConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseExadbVmClusterIdentityConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_state - computed: true, optional: false, required: false
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }

  // service_agent_email - computed: true, optional: false, required: false
  public get serviceAgentEmail() {
    return this.getStringAttribute('service_agent_email');
  }
}

export class OracleDatabaseExadbVmClusterIdentityConnectorList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDatabaseExadbVmClusterIdentityConnectorOutputReference {
    return new OracleDatabaseExadbVmClusterIdentityConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions {
  /**
  * Indicates whether to enable data collection for diagnostics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#is_diagnostics_events_enabled OracleDatabaseExadbVmCluster#is_diagnostics_events_enabled}
  */
  readonly isDiagnosticsEventsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether to enable health monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#is_health_monitoring_enabled OracleDatabaseExadbVmCluster#is_health_monitoring_enabled}
  */
  readonly isHealthMonitoringEnabled?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether to enable incident logs and trace collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#is_incident_logs_enabled OracleDatabaseExadbVmCluster#is_incident_logs_enabled}
  */
  readonly isIncidentLogsEnabled?: boolean | cdktn.IResolvable;
}

export function oracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsToTerraform(struct?: OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference | OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_diagnostics_events_enabled: cdktn.booleanToTerraform(struct!.isDiagnosticsEventsEnabled),
    is_health_monitoring_enabled: cdktn.booleanToTerraform(struct!.isHealthMonitoringEnabled),
    is_incident_logs_enabled: cdktn.booleanToTerraform(struct!.isIncidentLogsEnabled),
  }
}


export function oracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsToHclTerraform(struct?: OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference | OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_diagnostics_events_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isDiagnosticsEventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_health_monitoring_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isHealthMonitoringEnabled),
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

export class OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDiagnosticsEventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDiagnosticsEventsEnabled = this._isDiagnosticsEventsEnabled;
    }
    if (this._isHealthMonitoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHealthMonitoringEnabled = this._isHealthMonitoringEnabled;
    }
    if (this._isIncidentLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIncidentLogsEnabled = this._isIncidentLogsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isDiagnosticsEventsEnabled = undefined;
      this._isHealthMonitoringEnabled = undefined;
      this._isIncidentLogsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isDiagnosticsEventsEnabled = value.isDiagnosticsEventsEnabled;
      this._isHealthMonitoringEnabled = value.isHealthMonitoringEnabled;
      this._isIncidentLogsEnabled = value.isIncidentLogsEnabled;
    }
  }

  // is_diagnostics_events_enabled - computed: true, optional: true, required: false
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

  // is_health_monitoring_enabled - computed: true, optional: true, required: false
  private _isHealthMonitoringEnabled?: boolean | cdktn.IResolvable; 
  public get isHealthMonitoringEnabled() {
    return this.getBooleanAttribute('is_health_monitoring_enabled');
  }
  public set isHealthMonitoringEnabled(value: boolean | cdktn.IResolvable) {
    this._isHealthMonitoringEnabled = value;
  }
  public resetIsHealthMonitoringEnabled() {
    this._isHealthMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHealthMonitoringEnabledInput() {
    return this._isHealthMonitoringEnabled;
  }

  // is_incident_logs_enabled - computed: true, optional: true, required: false
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
export interface OracleDatabaseExadbVmClusterPropertiesTimeZone {
  /**
  * IANA Time Zone Database time zone. For example "America/New_York".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IANA Time Zone Database version number. For example "2019a".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#version OracleDatabaseExadbVmCluster#version}
  */
  readonly version?: string;
}

export function oracleDatabaseExadbVmClusterPropertiesTimeZoneToTerraform(struct?: OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference | OracleDatabaseExadbVmClusterPropertiesTimeZone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function oracleDatabaseExadbVmClusterPropertiesTimeZoneToHclTerraform(struct?: OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference | OracleDatabaseExadbVmClusterPropertiesTimeZone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseExadbVmClusterPropertiesTimeZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseExadbVmClusterPropertiesTimeZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._version = value.version;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage {
  /**
  * The storage allocation for the exadbvmcluster per node, in gigabytes (GB).
  * This field is used to calculate the total storage allocation for the
  * exadbvmcluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#size_in_gbs_per_node OracleDatabaseExadbVmCluster#size_in_gbs_per_node}
  */
  readonly sizeInGbsPerNode: number;
}

export function oracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageToTerraform(struct?: OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference | OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    size_in_gbs_per_node: cdktn.numberToTerraform(struct!.sizeInGbsPerNode),
  }
}


export function oracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageToHclTerraform(struct?: OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference | OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    size_in_gbs_per_node: {
      value: cdktn.numberToHclTerraform(struct!.sizeInGbsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeInGbsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGbsPerNode = this._sizeInGbsPerNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeInGbsPerNode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeInGbsPerNode = value.sizeInGbsPerNode;
    }
  }

  // size_in_gbs_per_node - computed: false, optional: false, required: true
  private _sizeInGbsPerNode?: number; 
  public get sizeInGbsPerNode() {
    return this.getNumberAttribute('size_in_gbs_per_node');
  }
  public set sizeInGbsPerNode(value: number) {
    this._sizeInGbsPerNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbsPerNodeInput() {
    return this._sizeInGbsPerNode;
  }
}
export interface OracleDatabaseExadbVmClusterProperties {
  /**
  * The number of additional ECPUs per node for an Exadata VM cluster on
  * exascale infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#additional_ecpu_count_per_node OracleDatabaseExadbVmCluster#additional_ecpu_count_per_node}
  */
  readonly additionalEcpuCountPerNode?: number;
  /**
  * The cluster name for Exascale vm cluster. The cluster name must begin with
  * an alphabetic character and may contain hyphens(-) but can not contain
  * underscores(_). It should be not more than 11 characters and is not case
  * sensitive.
  * OCI Cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#cluster_name OracleDatabaseExadbVmCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The number of ECPUs enabled per node for an exadata vm cluster on
  * exascale infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#enabled_ecpu_count_per_node OracleDatabaseExadbVmCluster#enabled_ecpu_count_per_node}
  */
  readonly enabledEcpuCountPerNode: number;
  /**
  * The name of ExascaleDbStorageVault associated with the ExadbVmCluster.
  * It can refer to an existing ExascaleDbStorageVault. Or a new one can be
  * created during the ExadbVmCluster creation (requires
  * storage_vault_properties to be set).
  * Format:
  * projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#exascale_db_storage_vault OracleDatabaseExadbVmCluster#exascale_db_storage_vault}
  */
  readonly exascaleDbStorageVault: string;
  /**
  * Grid Infrastructure Version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#grid_image_id OracleDatabaseExadbVmCluster#grid_image_id}
  */
  readonly gridImageId: string;
  /**
  * Prefix for VM cluster host names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#hostname_prefix OracleDatabaseExadbVmCluster#hostname_prefix}
  */
  readonly hostnamePrefix: string;
  /**
  * The license type of the ExadbVmCluster.
  * Possible values:
  * LICENSE_INCLUDED
  * BRING_YOUR_OWN_LICENSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#license_model OracleDatabaseExadbVmCluster#license_model}
  */
  readonly licenseModel?: string;
  /**
  * The number of nodes/VMs in the ExadbVmCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#node_count OracleDatabaseExadbVmCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * SCAN listener port - TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#scan_listener_port_tcp OracleDatabaseExadbVmCluster#scan_listener_port_tcp}
  */
  readonly scanListenerPortTcp?: number;
  /**
  * The shape attribute of the VM cluster. The type of Exascale storage used
  * for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle
  * Database 23ai and later
  * Possible values:
  * SMART_STORAGE
  * BLOCK_STORAGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#shape_attribute OracleDatabaseExadbVmCluster#shape_attribute}
  */
  readonly shapeAttribute: string;
  /**
  * The SSH public keys for the ExadbVmCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#ssh_public_keys OracleDatabaseExadbVmCluster#ssh_public_keys}
  */
  readonly sshPublicKeys: string[];
  /**
  * data_collection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#data_collection_options OracleDatabaseExadbVmCluster#data_collection_options}
  */
  readonly dataCollectionOptions?: OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions;
  /**
  * time_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#time_zone OracleDatabaseExadbVmCluster#time_zone}
  */
  readonly timeZone?: OracleDatabaseExadbVmClusterPropertiesTimeZone;
  /**
  * vm_file_system_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#vm_file_system_storage OracleDatabaseExadbVmCluster#vm_file_system_storage}
  */
  readonly vmFileSystemStorage: OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage;
}

export function oracleDatabaseExadbVmClusterPropertiesToTerraform(struct?: OracleDatabaseExadbVmClusterPropertiesOutputReference | OracleDatabaseExadbVmClusterProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_ecpu_count_per_node: cdktn.numberToTerraform(struct!.additionalEcpuCountPerNode),
    cluster_name: cdktn.stringToTerraform(struct!.clusterName),
    enabled_ecpu_count_per_node: cdktn.numberToTerraform(struct!.enabledEcpuCountPerNode),
    exascale_db_storage_vault: cdktn.stringToTerraform(struct!.exascaleDbStorageVault),
    grid_image_id: cdktn.stringToTerraform(struct!.gridImageId),
    hostname_prefix: cdktn.stringToTerraform(struct!.hostnamePrefix),
    license_model: cdktn.stringToTerraform(struct!.licenseModel),
    node_count: cdktn.numberToTerraform(struct!.nodeCount),
    scan_listener_port_tcp: cdktn.numberToTerraform(struct!.scanListenerPortTcp),
    shape_attribute: cdktn.stringToTerraform(struct!.shapeAttribute),
    ssh_public_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sshPublicKeys),
    data_collection_options: oracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsToTerraform(struct!.dataCollectionOptions),
    time_zone: oracleDatabaseExadbVmClusterPropertiesTimeZoneToTerraform(struct!.timeZone),
    vm_file_system_storage: oracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageToTerraform(struct!.vmFileSystemStorage),
  }
}


export function oracleDatabaseExadbVmClusterPropertiesToHclTerraform(struct?: OracleDatabaseExadbVmClusterPropertiesOutputReference | OracleDatabaseExadbVmClusterProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_ecpu_count_per_node: {
      value: cdktn.numberToHclTerraform(struct!.additionalEcpuCountPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_name: {
      value: cdktn.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_ecpu_count_per_node: {
      value: cdktn.numberToHclTerraform(struct!.enabledEcpuCountPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exascale_db_storage_vault: {
      value: cdktn.stringToHclTerraform(struct!.exascaleDbStorageVault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grid_image_id: {
      value: cdktn.stringToHclTerraform(struct!.gridImageId),
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
    license_model: {
      value: cdktn.stringToHclTerraform(struct!.licenseModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktn.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scan_listener_port_tcp: {
      value: cdktn.numberToHclTerraform(struct!.scanListenerPortTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape_attribute: {
      value: cdktn.stringToHclTerraform(struct!.shapeAttribute),
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
      value: oracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsToHclTerraform(struct!.dataCollectionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsList",
    },
    time_zone: {
      value: oracleDatabaseExadbVmClusterPropertiesTimeZoneToHclTerraform(struct!.timeZone),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseExadbVmClusterPropertiesTimeZoneList",
    },
    vm_file_system_storage: {
      value: oracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageToHclTerraform(struct!.vmFileSystemStorage),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseExadbVmClusterPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseExadbVmClusterProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalEcpuCountPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalEcpuCountPerNode = this._additionalEcpuCountPerNode;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._enabledEcpuCountPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledEcpuCountPerNode = this._enabledEcpuCountPerNode;
    }
    if (this._exascaleDbStorageVault !== undefined) {
      hasAnyValues = true;
      internalValueResult.exascaleDbStorageVault = this._exascaleDbStorageVault;
    }
    if (this._gridImageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridImageId = this._gridImageId;
    }
    if (this._hostnamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnamePrefix = this._hostnamePrefix;
    }
    if (this._licenseModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseModel = this._licenseModel;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._scanListenerPortTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanListenerPortTcp = this._scanListenerPortTcp;
    }
    if (this._shapeAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeAttribute = this._shapeAttribute;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._dataCollectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCollectionOptions = this._dataCollectionOptions?.internalValue;
    }
    if (this._timeZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone?.internalValue;
    }
    if (this._vmFileSystemStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmFileSystemStorage = this._vmFileSystemStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseExadbVmClusterProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalEcpuCountPerNode = undefined;
      this._clusterName = undefined;
      this._enabledEcpuCountPerNode = undefined;
      this._exascaleDbStorageVault = undefined;
      this._gridImageId = undefined;
      this._hostnamePrefix = undefined;
      this._licenseModel = undefined;
      this._nodeCount = undefined;
      this._scanListenerPortTcp = undefined;
      this._shapeAttribute = undefined;
      this._sshPublicKeys = undefined;
      this._dataCollectionOptions.internalValue = undefined;
      this._timeZone.internalValue = undefined;
      this._vmFileSystemStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalEcpuCountPerNode = value.additionalEcpuCountPerNode;
      this._clusterName = value.clusterName;
      this._enabledEcpuCountPerNode = value.enabledEcpuCountPerNode;
      this._exascaleDbStorageVault = value.exascaleDbStorageVault;
      this._gridImageId = value.gridImageId;
      this._hostnamePrefix = value.hostnamePrefix;
      this._licenseModel = value.licenseModel;
      this._nodeCount = value.nodeCount;
      this._scanListenerPortTcp = value.scanListenerPortTcp;
      this._shapeAttribute = value.shapeAttribute;
      this._sshPublicKeys = value.sshPublicKeys;
      this._dataCollectionOptions.internalValue = value.dataCollectionOptions;
      this._timeZone.internalValue = value.timeZone;
      this._vmFileSystemStorage.internalValue = value.vmFileSystemStorage;
    }
  }

  // additional_ecpu_count_per_node - computed: true, optional: true, required: false
  private _additionalEcpuCountPerNode?: number; 
  public get additionalEcpuCountPerNode() {
    return this.getNumberAttribute('additional_ecpu_count_per_node');
  }
  public set additionalEcpuCountPerNode(value: number) {
    this._additionalEcpuCountPerNode = value;
  }
  public resetAdditionalEcpuCountPerNode() {
    this._additionalEcpuCountPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEcpuCountPerNodeInput() {
    return this._additionalEcpuCountPerNode;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // enabled_ecpu_count_per_node - computed: false, optional: false, required: true
  private _enabledEcpuCountPerNode?: number; 
  public get enabledEcpuCountPerNode() {
    return this.getNumberAttribute('enabled_ecpu_count_per_node');
  }
  public set enabledEcpuCountPerNode(value: number) {
    this._enabledEcpuCountPerNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEcpuCountPerNodeInput() {
    return this._enabledEcpuCountPerNode;
  }

  // exascale_db_storage_vault - computed: false, optional: false, required: true
  private _exascaleDbStorageVault?: string; 
  public get exascaleDbStorageVault() {
    return this.getStringAttribute('exascale_db_storage_vault');
  }
  public set exascaleDbStorageVault(value: string) {
    this._exascaleDbStorageVault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exascaleDbStorageVaultInput() {
    return this._exascaleDbStorageVault;
  }

  // gi_version - computed: true, optional: false, required: false
  public get giVersion() {
    return this.getStringAttribute('gi_version');
  }

  // grid_image_id - computed: false, optional: false, required: true
  private _gridImageId?: string; 
  public get gridImageId() {
    return this.getStringAttribute('grid_image_id');
  }
  public set gridImageId(value: string) {
    this._gridImageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gridImageIdInput() {
    return this._gridImageId;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // hostname_prefix - computed: false, optional: false, required: true
  private _hostnamePrefix?: string; 
  public get hostnamePrefix() {
    return this.getStringAttribute('hostname_prefix');
  }
  public set hostnamePrefix(value: string) {
    this._hostnamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamePrefixInput() {
    return this._hostnamePrefix;
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // memory_size_gb - computed: true, optional: false, required: false
  public get memorySizeGb() {
    return this.getNumberAttribute('memory_size_gb');
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // oci_uri - computed: true, optional: false, required: false
  public get ociUri() {
    return this.getStringAttribute('oci_uri');
  }

  // scan_listener_port_tcp - computed: true, optional: true, required: false
  private _scanListenerPortTcp?: number; 
  public get scanListenerPortTcp() {
    return this.getNumberAttribute('scan_listener_port_tcp');
  }
  public set scanListenerPortTcp(value: number) {
    this._scanListenerPortTcp = value;
  }
  public resetScanListenerPortTcp() {
    this._scanListenerPortTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListenerPortTcpInput() {
    return this._scanListenerPortTcp;
  }

  // shape_attribute - computed: false, optional: false, required: true
  private _shapeAttribute?: string; 
  public get shapeAttribute() {
    return this.getStringAttribute('shape_attribute');
  }
  public set shapeAttribute(value: string) {
    this._shapeAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeAttributeInput() {
    return this._shapeAttribute;
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
  private _dataCollectionOptions = new OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference(this, "data_collection_options");
  public get dataCollectionOptions() {
    return this._dataCollectionOptions;
  }
  public putDataCollectionOptions(value: OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions) {
    this._dataCollectionOptions.internalValue = value;
  }
  public resetDataCollectionOptions() {
    this._dataCollectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionOptionsInput() {
    return this._dataCollectionOptions.internalValue;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone = new OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference(this, "time_zone");
  public get timeZone() {
    return this._timeZone;
  }
  public putTimeZone(value: OracleDatabaseExadbVmClusterPropertiesTimeZone) {
    this._timeZone.internalValue = value;
  }
  public resetTimeZone() {
    this._timeZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone.internalValue;
  }

  // vm_file_system_storage - computed: false, optional: false, required: true
  private _vmFileSystemStorage = new OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference(this, "vm_file_system_storage");
  public get vmFileSystemStorage() {
    return this._vmFileSystemStorage;
  }
  public putVmFileSystemStorage(value: OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage) {
    this._vmFileSystemStorage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmFileSystemStorageInput() {
    return this._vmFileSystemStorage.internalValue;
  }
}
export interface OracleDatabaseExadbVmClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#create OracleDatabaseExadbVmCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#delete OracleDatabaseExadbVmCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#update OracleDatabaseExadbVmCluster#update}
  */
  readonly update?: string;
}

export function oracleDatabaseExadbVmClusterTimeoutsToTerraform(struct?: OracleDatabaseExadbVmClusterTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function oracleDatabaseExadbVmClusterTimeoutsToHclTerraform(struct?: OracleDatabaseExadbVmClusterTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class OracleDatabaseExadbVmClusterTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OracleDatabaseExadbVmClusterTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OracleDatabaseExadbVmClusterTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster google_oracle_database_exadb_vm_cluster}
*/
export class OracleDatabaseExadbVmCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_oracle_database_exadb_vm_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OracleDatabaseExadbVmCluster to import
  * @param importFromId The id of the existing OracleDatabaseExadbVmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OracleDatabaseExadbVmCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_oracle_database_exadb_vm_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_exadb_vm_cluster google_oracle_database_exadb_vm_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OracleDatabaseExadbVmClusterConfig
  */
  public constructor(scope: Construct, id: string, config: OracleDatabaseExadbVmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_oracle_database_exadb_vm_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.1',
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
    this._backupOdbSubnet = config.backupOdbSubnet;
    this._deletionPolicy = config.deletionPolicy;
    this._deletionProtection = config.deletionProtection;
    this._displayName = config.displayName;
    this._exadbVmClusterId = config.exadbVmClusterId;
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

  // backup_odb_subnet - computed: false, optional: false, required: true
  private _backupOdbSubnet?: string; 
  public get backupOdbSubnet() {
    return this.getStringAttribute('backup_odb_subnet');
  }
  public set backupOdbSubnet(value: string) {
    this._backupOdbSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOdbSubnetInput() {
    return this._backupOdbSubnet;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

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

  // exadb_vm_cluster_id - computed: false, optional: false, required: true
  private _exadbVmClusterId?: string; 
  public get exadbVmClusterId() {
    return this.getStringAttribute('exadb_vm_cluster_id');
  }
  public set exadbVmClusterId(value: string) {
    this._exadbVmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exadbVmClusterIdInput() {
    return this._exadbVmClusterId;
  }

  // gcp_oracle_zone - computed: true, optional: false, required: false
  public get gcpOracleZone() {
    return this.getStringAttribute('gcp_oracle_zone');
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

  // identity_connector - computed: true, optional: false, required: false
  private _identityConnector = new OracleDatabaseExadbVmClusterIdentityConnectorList(this, "identity_connector", false);
  public get identityConnector() {
    return this._identityConnector;
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

  // properties - computed: false, optional: false, required: true
  private _properties = new OracleDatabaseExadbVmClusterPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OracleDatabaseExadbVmClusterProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OracleDatabaseExadbVmClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OracleDatabaseExadbVmClusterTimeouts) {
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
      backup_odb_subnet: cdktn.stringToTerraform(this._backupOdbSubnet),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
      display_name: cdktn.stringToTerraform(this._displayName),
      exadb_vm_cluster_id: cdktn.stringToTerraform(this._exadbVmClusterId),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      odb_network: cdktn.stringToTerraform(this._odbNetwork),
      odb_subnet: cdktn.stringToTerraform(this._odbSubnet),
      project: cdktn.stringToTerraform(this._project),
      properties: oracleDatabaseExadbVmClusterPropertiesToTerraform(this._properties.internalValue),
      timeouts: oracleDatabaseExadbVmClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_odb_subnet: {
        value: cdktn.stringToHclTerraform(this._backupOdbSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
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
      exadb_vm_cluster_id: {
        value: cdktn.stringToHclTerraform(this._exadbVmClusterId),
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
        value: oracleDatabaseExadbVmClusterPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleDatabaseExadbVmClusterPropertiesList",
      },
      timeouts: {
        value: oracleDatabaseExadbVmClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OracleDatabaseExadbVmClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
