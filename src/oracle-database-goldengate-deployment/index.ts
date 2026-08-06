/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OracleDatabaseGoldengateDeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "PREVENT".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#deletion_policy OracleDatabaseGoldengateDeployment#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The display name for the GoldengateDeployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#display_name OracleDatabaseGoldengateDeployment#display_name}
  */
  readonly displayName: string;
  /**
  * The GCP Oracle zone where Oracle GoldengateDeployment is hosted.
  * Example: us-east4-b-r2.
  * If not specified, the system will pick a zone based on availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#gcp_oracle_zone OracleDatabaseGoldengateDeployment#gcp_oracle_zone}
  */
  readonly gcpOracleZone?: string;
  /**
  * The ID of the GoldengateDeployment to create. This value is
  * restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of
  * 63 characters in length. The value must start with a letter and end with a
  * letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#goldengate_deployment_id OracleDatabaseGoldengateDeployment#goldengate_deployment_id}
  */
  readonly goldengateDeploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#id OracleDatabaseGoldengateDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels or tags associated with the GoldengateDeployment.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#labels OracleDatabaseGoldengateDeployment#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#location OracleDatabaseGoldengateDeployment#location}
  */
  readonly location: string;
  /**
  * The name of the OdbNetwork associated with the GoldengateDeployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#odb_network OracleDatabaseGoldengateDeployment#odb_network}
  */
  readonly odbNetwork?: string;
  /**
  * The name of the OdbSubnet associated with the GoldengateDeployment for IP
  * allocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#odb_subnet OracleDatabaseGoldengateDeployment#odb_subnet}
  */
  readonly odbSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#project OracleDatabaseGoldengateDeployment#project}
  */
  readonly project?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#properties OracleDatabaseGoldengateDeployment#properties}
  */
  readonly properties: OracleDatabaseGoldengateDeploymentProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#timeouts OracleDatabaseGoldengateDeployment#timeouts}
  */
  readonly timeouts?: OracleDatabaseGoldengateDeploymentTimeouts;
}
export interface OracleDatabaseGoldengateDeploymentPropertiesIngressIps {
}

export function oracleDatabaseGoldengateDeploymentPropertiesIngressIpsToTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesIngressIps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function oracleDatabaseGoldengateDeploymentPropertiesIngressIpsToHclTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesIngressIps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OracleDatabaseGoldengateDeploymentPropertiesIngressIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateDeploymentPropertiesIngressIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ingress_ip_address - computed: true, optional: false, required: false
  public get ingressIpAddress() {
    return this.getStringAttribute('ingress_ip_address');
  }
}

export class OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList extends cdktn.ComplexList {

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
  public get(index: number): OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference {
    return new OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseGoldengateDeploymentPropertiesLocks {
}

export function oracleDatabaseGoldengateDeploymentPropertiesLocksToTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesLocks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function oracleDatabaseGoldengateDeploymentPropertiesLocksToHclTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesLocks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OracleDatabaseGoldengateDeploymentPropertiesLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateDeploymentPropertiesLocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class OracleDatabaseGoldengateDeploymentPropertiesLocksList extends cdktn.ComplexList {

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
  public get(index: number): OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference {
    return new OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseGoldengateDeploymentPropertiesPlacements {
}

export function oracleDatabaseGoldengateDeploymentPropertiesPlacementsToTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesPlacements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function oracleDatabaseGoldengateDeploymentPropertiesPlacementsToHclTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesPlacements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OracleDatabaseGoldengateDeploymentPropertiesPlacements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateDeploymentPropertiesPlacements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
}

export class OracleDatabaseGoldengateDeploymentPropertiesPlacementsList extends cdktn.ComplexList {

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
  public get(index: number): OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference {
    return new OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule {
}

export function oracleDatabaseGoldengateDeploymentPropertiesBackupScheduleToTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference | OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function oracleDatabaseGoldengateDeploymentPropertiesBackupScheduleToHclTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference | OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_scheduled_time - computed: true, optional: false, required: false
  public get backupScheduledTime() {
    return this.getStringAttribute('backup_scheduled_time');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // frequency_backup_scheduled - computed: true, optional: false, required: false
  public get frequencyBackupScheduled() {
    return this.getStringAttribute('frequency_backup_scheduled');
  }

  // metadata_only - computed: true, optional: false, required: false
  public get metadataOnly() {
    return this.getBooleanAttribute('metadata_only');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export interface OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData {
}

export function oracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataToTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference | OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function oracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataToHclTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference | OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // diagnostic_end_time - computed: true, optional: false, required: false
  public get diagnosticEndTime() {
    return this.getStringAttribute('diagnostic_end_time');
  }

  // diagnostic_start_time - computed: true, optional: false, required: false
  public get diagnosticStartTime() {
    return this.getStringAttribute('diagnostic_start_time');
  }

  // diagnostic_state - computed: true, optional: false, required: false
  public get diagnosticState() {
    return this.getStringAttribute('diagnostic_state');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig {
  /**
  * Defines auto upgrade period for bundle releases. Manually configured period
  * cannot be longer than service defined period for bundle releases. This
  * period must be shorter or equal to major release upgrade period. Not
  * passing this field during create will equate to using the service default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#bundle_release_upgrade_period_days OracleDatabaseGoldengateDeployment#bundle_release_upgrade_period_days}
  */
  readonly bundleReleaseUpgradePeriodDays?: number;
  /**
  * Defines auto upgrade period for interim releases. This period must be
  * shorter or equal to bundle release upgrade period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#interim_release_upgrade_period_days OracleDatabaseGoldengateDeployment#interim_release_upgrade_period_days}
  */
  readonly interimReleaseUpgradePeriodDays?: number;
  /**
  * By default auto upgrade for interim releases are not enabled. If
  * auto-upgrade is enabled for interim release,  you have to specify
  * interim_release_upgrade_period_days too.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#is_interim_release_auto_upgrade_enabled OracleDatabaseGoldengateDeployment#is_interim_release_auto_upgrade_enabled}
  */
  readonly isInterimReleaseAutoUpgradeEnabled?: boolean | cdktn.IResolvable;
  /**
  * Defines auto upgrade period for major releases. Manually configured period
  * cannot be longer than service defined period for major releases. Not
  * passing this field during create will equate to using the service default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#major_release_upgrade_period_days OracleDatabaseGoldengateDeployment#major_release_upgrade_period_days}
  */
  readonly majorReleaseUpgradePeriodDays?: number;
  /**
  * Defines auto upgrade period for releases with security fix. Manually
  * configured period cannot be longer than service defined period for security
  * releases. Not passing this field during create will equate to using the
  * service default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#security_patch_upgrade_period_days OracleDatabaseGoldengateDeployment#security_patch_upgrade_period_days}
  */
  readonly securityPatchUpgradePeriodDays?: number;
}

export function oracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigToTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference | OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bundle_release_upgrade_period_days: cdktn.numberToTerraform(struct!.bundleReleaseUpgradePeriodDays),
    interim_release_upgrade_period_days: cdktn.numberToTerraform(struct!.interimReleaseUpgradePeriodDays),
    is_interim_release_auto_upgrade_enabled: cdktn.booleanToTerraform(struct!.isInterimReleaseAutoUpgradeEnabled),
    major_release_upgrade_period_days: cdktn.numberToTerraform(struct!.majorReleaseUpgradePeriodDays),
    security_patch_upgrade_period_days: cdktn.numberToTerraform(struct!.securityPatchUpgradePeriodDays),
  }
}


export function oracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigToHclTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference | OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bundle_release_upgrade_period_days: {
      value: cdktn.numberToHclTerraform(struct!.bundleReleaseUpgradePeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interim_release_upgrade_period_days: {
      value: cdktn.numberToHclTerraform(struct!.interimReleaseUpgradePeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_interim_release_auto_upgrade_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isInterimReleaseAutoUpgradeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    major_release_upgrade_period_days: {
      value: cdktn.numberToHclTerraform(struct!.majorReleaseUpgradePeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_patch_upgrade_period_days: {
      value: cdktn.numberToHclTerraform(struct!.securityPatchUpgradePeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleReleaseUpgradePeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleReleaseUpgradePeriodDays = this._bundleReleaseUpgradePeriodDays;
    }
    if (this._interimReleaseUpgradePeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.interimReleaseUpgradePeriodDays = this._interimReleaseUpgradePeriodDays;
    }
    if (this._isInterimReleaseAutoUpgradeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInterimReleaseAutoUpgradeEnabled = this._isInterimReleaseAutoUpgradeEnabled;
    }
    if (this._majorReleaseUpgradePeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.majorReleaseUpgradePeriodDays = this._majorReleaseUpgradePeriodDays;
    }
    if (this._securityPatchUpgradePeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityPatchUpgradePeriodDays = this._securityPatchUpgradePeriodDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bundleReleaseUpgradePeriodDays = undefined;
      this._interimReleaseUpgradePeriodDays = undefined;
      this._isInterimReleaseAutoUpgradeEnabled = undefined;
      this._majorReleaseUpgradePeriodDays = undefined;
      this._securityPatchUpgradePeriodDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bundleReleaseUpgradePeriodDays = value.bundleReleaseUpgradePeriodDays;
      this._interimReleaseUpgradePeriodDays = value.interimReleaseUpgradePeriodDays;
      this._isInterimReleaseAutoUpgradeEnabled = value.isInterimReleaseAutoUpgradeEnabled;
      this._majorReleaseUpgradePeriodDays = value.majorReleaseUpgradePeriodDays;
      this._securityPatchUpgradePeriodDays = value.securityPatchUpgradePeriodDays;
    }
  }

  // bundle_release_upgrade_period_days - computed: true, optional: true, required: false
  private _bundleReleaseUpgradePeriodDays?: number; 
  public get bundleReleaseUpgradePeriodDays() {
    return this.getNumberAttribute('bundle_release_upgrade_period_days');
  }
  public set bundleReleaseUpgradePeriodDays(value: number) {
    this._bundleReleaseUpgradePeriodDays = value;
  }
  public resetBundleReleaseUpgradePeriodDays() {
    this._bundleReleaseUpgradePeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleReleaseUpgradePeriodDaysInput() {
    return this._bundleReleaseUpgradePeriodDays;
  }

  // interim_release_upgrade_period_days - computed: true, optional: true, required: false
  private _interimReleaseUpgradePeriodDays?: number; 
  public get interimReleaseUpgradePeriodDays() {
    return this.getNumberAttribute('interim_release_upgrade_period_days');
  }
  public set interimReleaseUpgradePeriodDays(value: number) {
    this._interimReleaseUpgradePeriodDays = value;
  }
  public resetInterimReleaseUpgradePeriodDays() {
    this._interimReleaseUpgradePeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimReleaseUpgradePeriodDaysInput() {
    return this._interimReleaseUpgradePeriodDays;
  }

  // is_interim_release_auto_upgrade_enabled - computed: true, optional: true, required: false
  private _isInterimReleaseAutoUpgradeEnabled?: boolean | cdktn.IResolvable; 
  public get isInterimReleaseAutoUpgradeEnabled() {
    return this.getBooleanAttribute('is_interim_release_auto_upgrade_enabled');
  }
  public set isInterimReleaseAutoUpgradeEnabled(value: boolean | cdktn.IResolvable) {
    this._isInterimReleaseAutoUpgradeEnabled = value;
  }
  public resetIsInterimReleaseAutoUpgradeEnabled() {
    this._isInterimReleaseAutoUpgradeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInterimReleaseAutoUpgradeEnabledInput() {
    return this._isInterimReleaseAutoUpgradeEnabled;
  }

  // major_release_upgrade_period_days - computed: true, optional: true, required: false
  private _majorReleaseUpgradePeriodDays?: number; 
  public get majorReleaseUpgradePeriodDays() {
    return this.getNumberAttribute('major_release_upgrade_period_days');
  }
  public set majorReleaseUpgradePeriodDays(value: number) {
    this._majorReleaseUpgradePeriodDays = value;
  }
  public resetMajorReleaseUpgradePeriodDays() {
    this._majorReleaseUpgradePeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorReleaseUpgradePeriodDaysInput() {
    return this._majorReleaseUpgradePeriodDays;
  }

  // security_patch_upgrade_period_days - computed: true, optional: true, required: false
  private _securityPatchUpgradePeriodDays?: number; 
  public get securityPatchUpgradePeriodDays() {
    return this.getNumberAttribute('security_patch_upgrade_period_days');
  }
  public set securityPatchUpgradePeriodDays(value: number) {
    this._securityPatchUpgradePeriodDays = value;
  }
  public resetSecurityPatchUpgradePeriodDays() {
    this._securityPatchUpgradePeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPatchUpgradePeriodDaysInput() {
    return this._securityPatchUpgradePeriodDays;
  }
}
export interface OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#day OracleDatabaseGoldengateDeployment#day}
  */
  readonly day: string;
  /**
  * Start hour for maintenance period. Hour is in UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#start_hour OracleDatabaseGoldengateDeployment#start_hour}
  */
  readonly startHour: number;
}

export function oracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowToTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference | OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day: cdktn.stringToTerraform(struct!.day),
    start_hour: cdktn.numberToTerraform(struct!.startHour),
  }
}


export function oracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowToHclTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference | OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day: {
      value: cdktn.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_hour: {
      value: cdktn.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._startHour = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._startHour = value.startHour;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }
}
export interface OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping {
}

export function oracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingToTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference | OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function oracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingToHclTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference | OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // administrator_group_id - computed: true, optional: false, required: false
  public get administratorGroupId() {
    return this.getStringAttribute('administrator_group_id');
  }

  // operator_group_id - computed: true, optional: false, required: false
  public get operatorGroupId() {
    return this.getStringAttribute('operator_group_id');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // user_group_id - computed: true, optional: false, required: false
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
}
export interface OracleDatabaseGoldengateDeploymentPropertiesOggData {
  /**
  * The Goldengate deployment console password in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#admin_password OracleDatabaseGoldengateDeployment#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Input only. The Goldengate deployment console password secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#admin_password_secret_version OracleDatabaseGoldengateDeployment#admin_password_secret_version}
  */
  readonly adminPasswordSecretVersion?: string;
  /**
  * The Goldengate deployment console username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#admin_username OracleDatabaseGoldengateDeployment#admin_username}
  */
  readonly adminUsername: string;
  /**
  * The name given to the Goldengate service deployment. The name must be 1 to
  * 32 characters long, must contain only alphanumeric characters and must
  * start with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#deployment OracleDatabaseGoldengateDeployment#deployment}
  */
  readonly deployment: string;
  /**
  * Version of OGG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#ogg_version OracleDatabaseGoldengateDeployment#ogg_version}
  */
  readonly oggVersion?: string;
  /**
  * group_roles_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#group_roles_mapping OracleDatabaseGoldengateDeployment#group_roles_mapping}
  */
  readonly groupRolesMapping?: OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping;
}

export function oracleDatabaseGoldengateDeploymentPropertiesOggDataToTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference | OracleDatabaseGoldengateDeploymentPropertiesOggData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    admin_password: cdktn.stringToTerraform(struct!.adminPassword),
    admin_password_secret_version: cdktn.stringToTerraform(struct!.adminPasswordSecretVersion),
    admin_username: cdktn.stringToTerraform(struct!.adminUsername),
    deployment: cdktn.stringToTerraform(struct!.deployment),
    ogg_version: cdktn.stringToTerraform(struct!.oggVersion),
    group_roles_mapping: oracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingToTerraform(struct!.groupRolesMapping),
  }
}


export function oracleDatabaseGoldengateDeploymentPropertiesOggDataToHclTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference | OracleDatabaseGoldengateDeploymentPropertiesOggData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    admin_password: {
      value: cdktn.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.adminPasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_username: {
      value: cdktn.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment: {
      value: cdktn.stringToHclTerraform(struct!.deployment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ogg_version: {
      value: cdktn.stringToHclTerraform(struct!.oggVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_roles_mapping: {
      value: oracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingToHclTerraform(struct!.groupRolesMapping),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateDeploymentPropertiesOggData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminPasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPasswordSecretVersion = this._adminPasswordSecretVersion;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._deployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment;
    }
    if (this._oggVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.oggVersion = this._oggVersion;
    }
    if (this._groupRolesMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRolesMapping = this._groupRolesMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateDeploymentPropertiesOggData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._adminPasswordSecretVersion = undefined;
      this._adminUsername = undefined;
      this._deployment = undefined;
      this._oggVersion = undefined;
      this._groupRolesMapping.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._adminPasswordSecretVersion = value.adminPasswordSecretVersion;
      this._adminUsername = value.adminUsername;
      this._deployment = value.deployment;
      this._oggVersion = value.oggVersion;
      this._groupRolesMapping.internalValue = value.groupRolesMapping;
    }
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_password_secret_version - computed: false, optional: true, required: false
  private _adminPasswordSecretVersion?: string; 
  public get adminPasswordSecretVersion() {
    return this.getStringAttribute('admin_password_secret_version');
  }
  public set adminPasswordSecretVersion(value: string) {
    this._adminPasswordSecretVersion = value;
  }
  public resetAdminPasswordSecretVersion() {
    this._adminPasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordSecretVersionInput() {
    return this._adminPasswordSecretVersion;
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // credential_store - computed: true, optional: false, required: false
  public get credentialStore() {
    return this.getStringAttribute('credential_store');
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment?: string; 
  public get deployment() {
    return this.getStringAttribute('deployment');
  }
  public set deployment(value: string) {
    this._deployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment;
  }

  // identity_domain_id - computed: true, optional: false, required: false
  public get identityDomainId() {
    return this.getStringAttribute('identity_domain_id');
  }

  // ogg_version - computed: true, optional: true, required: false
  private _oggVersion?: string; 
  public get oggVersion() {
    return this.getStringAttribute('ogg_version');
  }
  public set oggVersion(value: string) {
    this._oggVersion = value;
  }
  public resetOggVersion() {
    this._oggVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oggVersionInput() {
    return this._oggVersion;
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // group_roles_mapping - computed: false, optional: true, required: false
  private _groupRolesMapping = new OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference(this, "group_roles_mapping");
  public get groupRolesMapping() {
    return this._groupRolesMapping;
  }
  public putGroupRolesMapping(value: OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping) {
    this._groupRolesMapping.internalValue = value;
  }
  public resetGroupRolesMapping() {
    this._groupRolesMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRolesMappingInput() {
    return this._groupRolesMapping.internalValue;
  }
}
export interface OracleDatabaseGoldengateDeploymentProperties {
  /**
  * The Minimum number of OCPUs to be made available for this Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#cpu_core_count OracleDatabaseGoldengateDeployment#cpu_core_count}
  */
  readonly cpuCoreCount?: number;
  /**
  * A valid Goldengate Deployment type. For a list of supported types, use
  * the 'ListGoldengateDeploymentTypes' operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#deployment_type OracleDatabaseGoldengateDeployment#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * The description of the GoldengateDeployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#description OracleDatabaseGoldengateDeployment#description}
  */
  readonly description?: string;
  /**
  * The environment type of the GoldengateDeployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#environment_type OracleDatabaseGoldengateDeployment#environment_type}
  */
  readonly environmentType?: string;
  /**
  * Indicates if auto scaling is enabled for the Deployment's CPU core count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#is_auto_scaling_enabled OracleDatabaseGoldengateDeployment#is_auto_scaling_enabled}
  */
  readonly isAutoScalingEnabled?: boolean | cdktn.IResolvable;
  /**
  * The Oracle license model that applies to a Deployment.
  * Possible values:
  * LICENSE_INCLUDED
  * BRING_YOUR_OWN_LICENSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#license_model OracleDatabaseGoldengateDeployment#license_model}
  */
  readonly licenseModel?: string;
  /**
  * backup_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#backup_schedule OracleDatabaseGoldengateDeployment#backup_schedule}
  */
  readonly backupSchedule?: OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule;
  /**
  * deployment_diagnostic_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#deployment_diagnostic_data OracleDatabaseGoldengateDeployment#deployment_diagnostic_data}
  */
  readonly deploymentDiagnosticData?: OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData;
  /**
  * maintenance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#maintenance_config OracleDatabaseGoldengateDeployment#maintenance_config}
  */
  readonly maintenanceConfig?: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#maintenance_window OracleDatabaseGoldengateDeployment#maintenance_window}
  */
  readonly maintenanceWindow?: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow;
  /**
  * ogg_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#ogg_data OracleDatabaseGoldengateDeployment#ogg_data}
  */
  readonly oggData: OracleDatabaseGoldengateDeploymentPropertiesOggData;
}

export function oracleDatabaseGoldengateDeploymentPropertiesToTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesOutputReference | OracleDatabaseGoldengateDeploymentProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cpu_core_count: cdktn.numberToTerraform(struct!.cpuCoreCount),
    deployment_type: cdktn.stringToTerraform(struct!.deploymentType),
    description: cdktn.stringToTerraform(struct!.description),
    environment_type: cdktn.stringToTerraform(struct!.environmentType),
    is_auto_scaling_enabled: cdktn.booleanToTerraform(struct!.isAutoScalingEnabled),
    license_model: cdktn.stringToTerraform(struct!.licenseModel),
    backup_schedule: oracleDatabaseGoldengateDeploymentPropertiesBackupScheduleToTerraform(struct!.backupSchedule),
    deployment_diagnostic_data: oracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataToTerraform(struct!.deploymentDiagnosticData),
    maintenance_config: oracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigToTerraform(struct!.maintenanceConfig),
    maintenance_window: oracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    ogg_data: oracleDatabaseGoldengateDeploymentPropertiesOggDataToTerraform(struct!.oggData),
  }
}


export function oracleDatabaseGoldengateDeploymentPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateDeploymentPropertiesOutputReference | OracleDatabaseGoldengateDeploymentProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cpu_core_count: {
      value: cdktn.numberToHclTerraform(struct!.cpuCoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deployment_type: {
      value: cdktn.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_type: {
      value: cdktn.stringToHclTerraform(struct!.environmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_auto_scaling_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isAutoScalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    license_model: {
      value: cdktn.stringToHclTerraform(struct!.licenseModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_schedule: {
      value: oracleDatabaseGoldengateDeploymentPropertiesBackupScheduleToHclTerraform(struct!.backupSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleList",
    },
    deployment_diagnostic_data: {
      value: oracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataToHclTerraform(struct!.deploymentDiagnosticData),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataList",
    },
    maintenance_config: {
      value: oracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigToHclTerraform(struct!.maintenanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigList",
    },
    maintenance_window: {
      value: oracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowList",
    },
    ogg_data: {
      value: oracleDatabaseGoldengateDeploymentPropertiesOggDataToHclTerraform(struct!.oggData),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateDeploymentPropertiesOggDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateDeploymentPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateDeploymentProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCoreCount = this._cpuCoreCount;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._environmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentType = this._environmentType;
    }
    if (this._isAutoScalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoScalingEnabled = this._isAutoScalingEnabled;
    }
    if (this._licenseModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseModel = this._licenseModel;
    }
    if (this._backupSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSchedule = this._backupSchedule?.internalValue;
    }
    if (this._deploymentDiagnosticData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentDiagnosticData = this._deploymentDiagnosticData?.internalValue;
    }
    if (this._maintenanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceConfig = this._maintenanceConfig?.internalValue;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    if (this._oggData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oggData = this._oggData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateDeploymentProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCoreCount = undefined;
      this._deploymentType = undefined;
      this._description = undefined;
      this._environmentType = undefined;
      this._isAutoScalingEnabled = undefined;
      this._licenseModel = undefined;
      this._backupSchedule.internalValue = undefined;
      this._deploymentDiagnosticData.internalValue = undefined;
      this._maintenanceConfig.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._oggData.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCoreCount = value.cpuCoreCount;
      this._deploymentType = value.deploymentType;
      this._description = value.description;
      this._environmentType = value.environmentType;
      this._isAutoScalingEnabled = value.isAutoScalingEnabled;
      this._licenseModel = value.licenseModel;
      this._backupSchedule.internalValue = value.backupSchedule;
      this._deploymentDiagnosticData.internalValue = value.deploymentDiagnosticData;
      this._maintenanceConfig.internalValue = value.maintenanceConfig;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._oggData.internalValue = value.oggData;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // cpu_core_count - computed: false, optional: true, required: false
  private _cpuCoreCount?: number; 
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }
  public resetCpuCoreCount() {
    this._cpuCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreCountInput() {
    return this._cpuCoreCount;
  }

  // deployment_backup_id - computed: true, optional: false, required: false
  public get deploymentBackupId() {
    return this.getStringAttribute('deployment_backup_id');
  }

  // deployment_role - computed: true, optional: false, required: false
  public get deploymentRole() {
    return this.getStringAttribute('deployment_role');
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // deployment_url - computed: true, optional: false, required: false
  public get deploymentUrl() {
    return this.getStringAttribute('deployment_url');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // environment_type - computed: true, optional: true, required: false
  private _environmentType?: string; 
  public get environmentType() {
    return this.getStringAttribute('environment_type');
  }
  public set environmentType(value: string) {
    this._environmentType = value;
  }
  public resetEnvironmentType() {
    this._environmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentTypeInput() {
    return this._environmentType;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // healthy - computed: true, optional: false, required: false
  public get healthy() {
    return this.getBooleanAttribute('healthy');
  }

  // ingress_ips - computed: true, optional: false, required: false
  private _ingressIps = new OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList(this, "ingress_ips", false);
  public get ingressIps() {
    return this._ingressIps;
  }

  // is_auto_scaling_enabled - computed: true, optional: true, required: false
  private _isAutoScalingEnabled?: boolean | cdktn.IResolvable; 
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }
  public set isAutoScalingEnabled(value: boolean | cdktn.IResolvable) {
    this._isAutoScalingEnabled = value;
  }
  public resetIsAutoScalingEnabled() {
    this._isAutoScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoScalingEnabledInput() {
    return this._isAutoScalingEnabled;
  }

  // is_latest_version - computed: true, optional: false, required: false
  public get isLatestVersion() {
    return this.getBooleanAttribute('is_latest_version');
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // is_storage_utilization_limit_exceeded - computed: true, optional: false, required: false
  public get isStorageUtilizationLimitExceeded() {
    return this.getBooleanAttribute('is_storage_utilization_limit_exceeded');
  }

  // last_backup_schedule_time - computed: true, optional: false, required: false
  public get lastBackupScheduleTime() {
    return this.getStringAttribute('last_backup_schedule_time');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // lifecycle_sub_state - computed: true, optional: false, required: false
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // load_balancer_subnet_id - computed: true, optional: false, required: false
  public get loadBalancerSubnetId() {
    return this.getStringAttribute('load_balancer_subnet_id');
  }

  // locks - computed: true, optional: false, required: false
  private _locks = new OracleDatabaseGoldengateDeploymentPropertiesLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }

  // next_backup_schedule_time - computed: true, optional: false, required: false
  public get nextBackupScheduleTime() {
    return this.getStringAttribute('next_backup_schedule_time');
  }

  // next_maintenance_action_type - computed: true, optional: false, required: false
  public get nextMaintenanceActionType() {
    return this.getStringAttribute('next_maintenance_action_type');
  }

  // next_maintenance_description - computed: true, optional: false, required: false
  public get nextMaintenanceDescription() {
    return this.getStringAttribute('next_maintenance_description');
  }

  // next_maintenance_time - computed: true, optional: false, required: false
  public get nextMaintenanceTime() {
    return this.getStringAttribute('next_maintenance_time');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ogg_version_support_end_time - computed: true, optional: false, required: false
  public get oggVersionSupportEndTime() {
    return this.getStringAttribute('ogg_version_support_end_time');
  }

  // placements - computed: true, optional: false, required: false
  private _placements = new OracleDatabaseGoldengateDeploymentPropertiesPlacementsList(this, "placements", false);
  public get placements() {
    return this._placements;
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // role_change_time - computed: true, optional: false, required: false
  public get roleChangeTime() {
    return this.getStringAttribute('role_change_time');
  }

  // storage_utilization_bytes - computed: true, optional: false, required: false
  public get storageUtilizationBytes() {
    return this.getStringAttribute('storage_utilization_bytes');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // upgrade_required_time - computed: true, optional: false, required: false
  public get upgradeRequiredTime() {
    return this.getStringAttribute('upgrade_required_time');
  }

  // backup_schedule - computed: false, optional: true, required: false
  private _backupSchedule = new OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference(this, "backup_schedule");
  public get backupSchedule() {
    return this._backupSchedule;
  }
  public putBackupSchedule(value: OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule) {
    this._backupSchedule.internalValue = value;
  }
  public resetBackupSchedule() {
    this._backupSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleInput() {
    return this._backupSchedule.internalValue;
  }

  // deployment_diagnostic_data - computed: false, optional: true, required: false
  private _deploymentDiagnosticData = new OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference(this, "deployment_diagnostic_data");
  public get deploymentDiagnosticData() {
    return this._deploymentDiagnosticData;
  }
  public putDeploymentDiagnosticData(value: OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData) {
    this._deploymentDiagnosticData.internalValue = value;
  }
  public resetDeploymentDiagnosticData() {
    this._deploymentDiagnosticData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentDiagnosticDataInput() {
    return this._deploymentDiagnosticData.internalValue;
  }

  // maintenance_config - computed: false, optional: true, required: false
  private _maintenanceConfig = new OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference(this, "maintenance_config");
  public get maintenanceConfig() {
    return this._maintenanceConfig;
  }
  public putMaintenanceConfig(value: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig) {
    this._maintenanceConfig.internalValue = value;
  }
  public resetMaintenanceConfig() {
    this._maintenanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigInput() {
    return this._maintenanceConfig.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // ogg_data - computed: false, optional: false, required: true
  private _oggData = new OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference(this, "ogg_data");
  public get oggData() {
    return this._oggData;
  }
  public putOggData(value: OracleDatabaseGoldengateDeploymentPropertiesOggData) {
    this._oggData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oggDataInput() {
    return this._oggData.internalValue;
  }
}
export interface OracleDatabaseGoldengateDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#create OracleDatabaseGoldengateDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#delete OracleDatabaseGoldengateDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#update OracleDatabaseGoldengateDeployment#update}
  */
  readonly update?: string;
}

export function oracleDatabaseGoldengateDeploymentTimeoutsToTerraform(struct?: OracleDatabaseGoldengateDeploymentTimeouts | cdktn.IResolvable): any {
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


export function oracleDatabaseGoldengateDeploymentTimeoutsToHclTerraform(struct?: OracleDatabaseGoldengateDeploymentTimeouts | cdktn.IResolvable): any {
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

export class OracleDatabaseGoldengateDeploymentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OracleDatabaseGoldengateDeploymentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OracleDatabaseGoldengateDeploymentTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment google_oracle_database_goldengate_deployment}
*/
export class OracleDatabaseGoldengateDeployment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_oracle_database_goldengate_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OracleDatabaseGoldengateDeployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OracleDatabaseGoldengateDeployment to import
  * @param importFromId The id of the existing OracleDatabaseGoldengateDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OracleDatabaseGoldengateDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_oracle_database_goldengate_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_goldengate_deployment google_oracle_database_goldengate_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OracleDatabaseGoldengateDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: OracleDatabaseGoldengateDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_oracle_database_goldengate_deployment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.43.0',
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
    this._gcpOracleZone = config.gcpOracleZone;
    this._goldengateDeploymentId = config.goldengateDeploymentId;
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

  // goldengate_deployment_id - computed: false, optional: false, required: true
  private _goldengateDeploymentId?: string; 
  public get goldengateDeploymentId() {
    return this.getStringAttribute('goldengate_deployment_id');
  }
  public set goldengateDeploymentId(value: string) {
    this._goldengateDeploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goldengateDeploymentIdInput() {
    return this._goldengateDeploymentId;
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

  // odb_network - computed: true, optional: true, required: false
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
  private _properties = new OracleDatabaseGoldengateDeploymentPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OracleDatabaseGoldengateDeploymentProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OracleDatabaseGoldengateDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OracleDatabaseGoldengateDeploymentTimeouts) {
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
      gcp_oracle_zone: cdktn.stringToTerraform(this._gcpOracleZone),
      goldengate_deployment_id: cdktn.stringToTerraform(this._goldengateDeploymentId),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      odb_network: cdktn.stringToTerraform(this._odbNetwork),
      odb_subnet: cdktn.stringToTerraform(this._odbSubnet),
      project: cdktn.stringToTerraform(this._project),
      properties: oracleDatabaseGoldengateDeploymentPropertiesToTerraform(this._properties.internalValue),
      timeouts: oracleDatabaseGoldengateDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
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
      gcp_oracle_zone: {
        value: cdktn.stringToHclTerraform(this._gcpOracleZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      goldengate_deployment_id: {
        value: cdktn.stringToHclTerraform(this._goldengateDeploymentId),
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
        value: oracleDatabaseGoldengateDeploymentPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleDatabaseGoldengateDeploymentPropertiesList",
      },
      timeouts: {
        value: oracleDatabaseGoldengateDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OracleDatabaseGoldengateDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
