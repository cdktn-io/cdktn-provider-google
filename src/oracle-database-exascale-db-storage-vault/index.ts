/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OracleDatabaseExascaleDbStorageVaultConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#deletion_policy OracleDatabaseExascaleDbStorageVault#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Whether or not to allow Terraform to destroy the instance. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#deletion_protection OracleDatabaseExascaleDbStorageVault#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktn.IResolvable;
  /**
  * The display name for the ExascaleDbStorageVault. The name does not have to
  * be unique within your project. The name must be 1-255 characters long and
  * can only contain alphanumeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#display_name OracleDatabaseExascaleDbStorageVault#display_name}
  */
  readonly displayName: string;
  /**
  * The Exadata Infrastructure resource on which ExascaleDbStorageVault resource is created.
  * In the format: projects/{project}/locations/{region}/cloudExadataInfrastructures/{cloud_extradata_infrastructure}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#exadata_infrastructure OracleDatabaseExascaleDbStorageVault#exadata_infrastructure}
  */
  readonly exadataInfrastructure?: string;
  /**
  * The ID of the ExascaleDbStorageVault to create. This value is
  * restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of
  * 63 characters in length. The value must start with a letter and end with a
  * letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id OracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}
  */
  readonly exascaleDbStorageVaultId: string;
  /**
  * The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted.
  * Example: us-east4-b-r2.
  * If not specified, the system will pick a zone based on availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#gcp_oracle_zone OracleDatabaseExascaleDbStorageVault#gcp_oracle_zone}
  */
  readonly gcpOracleZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels or tags associated with the ExascaleDbStorageVault.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#labels OracleDatabaseExascaleDbStorageVault#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#location OracleDatabaseExascaleDbStorageVault#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#project OracleDatabaseExascaleDbStorageVault#project}
  */
  readonly project?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#properties OracleDatabaseExascaleDbStorageVault#properties}
  */
  readonly properties: OracleDatabaseExascaleDbStorageVaultProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#timeouts OracleDatabaseExascaleDbStorageVault#timeouts}
  */
  readonly timeouts?: OracleDatabaseExascaleDbStorageVaultTimeouts;
}
export interface OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails {
  /**
  * The total storage allocation for the ExascaleDbStorageVault, in gigabytes
  * (GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#total_size_gbs OracleDatabaseExascaleDbStorageVault#total_size_gbs}
  */
  readonly totalSizeGbs: number;
}

export function oracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsToTerraform(struct?: OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference | OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    total_size_gbs: cdktn.numberToTerraform(struct!.totalSizeGbs),
  }
}


export function oracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsToHclTerraform(struct?: OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference | OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    total_size_gbs: {
      value: cdktn.numberToHclTerraform(struct!.totalSizeGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalSizeGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSizeGbs = this._totalSizeGbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalSizeGbs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalSizeGbs = value.totalSizeGbs;
    }
  }

  // available_size_gbs - computed: true, optional: false, required: false
  public get availableSizeGbs() {
    return this.getNumberAttribute('available_size_gbs');
  }

  // total_size_gbs - computed: false, optional: false, required: true
  private _totalSizeGbs?: number; 
  public get totalSizeGbs() {
    return this.getNumberAttribute('total_size_gbs');
  }
  public set totalSizeGbs(value: number) {
    this._totalSizeGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSizeGbsInput() {
    return this._totalSizeGbs;
  }
}
export interface OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone {
  /**
  * IANA Time Zone Database time zone. For example "America/New_York".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IANA Time Zone Database version number. For example "2019a".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#version OracleDatabaseExascaleDbStorageVault#version}
  */
  readonly version?: string;
}

export function oracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneToTerraform(struct?: OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference | OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function oracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneToHclTerraform(struct?: OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference | OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone): any {
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

export class OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone | undefined {
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

  public set internalValue(value: OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone | undefined) {
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

  // version - computed: true, optional: true, required: false
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
export interface OracleDatabaseExascaleDbStorageVaultProperties {
  /**
  * The size of additional flash cache in percentage of high capacity
  * database storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#additional_flash_cache_percent OracleDatabaseExascaleDbStorageVault#additional_flash_cache_percent}
  */
  readonly additionalFlashCachePercent?: number;
  /**
  * exascale_db_storage_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#exascale_db_storage_details OracleDatabaseExascaleDbStorageVault#exascale_db_storage_details}
  */
  readonly exascaleDbStorageDetails: OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails;
  /**
  * time_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#time_zone OracleDatabaseExascaleDbStorageVault#time_zone}
  */
  readonly timeZone?: OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone;
}

export function oracleDatabaseExascaleDbStorageVaultPropertiesToTerraform(struct?: OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference | OracleDatabaseExascaleDbStorageVaultProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_flash_cache_percent: cdktn.numberToTerraform(struct!.additionalFlashCachePercent),
    exascale_db_storage_details: oracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsToTerraform(struct!.exascaleDbStorageDetails),
    time_zone: oracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneToTerraform(struct!.timeZone),
  }
}


export function oracleDatabaseExascaleDbStorageVaultPropertiesToHclTerraform(struct?: OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference | OracleDatabaseExascaleDbStorageVaultProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_flash_cache_percent: {
      value: cdktn.numberToHclTerraform(struct!.additionalFlashCachePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exascale_db_storage_details: {
      value: oracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsToHclTerraform(struct!.exascaleDbStorageDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList",
    },
    time_zone: {
      value: oracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneToHclTerraform(struct!.timeZone),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseExascaleDbStorageVaultProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalFlashCachePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalFlashCachePercent = this._additionalFlashCachePercent;
    }
    if (this._exascaleDbStorageDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exascaleDbStorageDetails = this._exascaleDbStorageDetails?.internalValue;
    }
    if (this._timeZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseExascaleDbStorageVaultProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalFlashCachePercent = undefined;
      this._exascaleDbStorageDetails.internalValue = undefined;
      this._timeZone.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalFlashCachePercent = value.additionalFlashCachePercent;
      this._exascaleDbStorageDetails.internalValue = value.exascaleDbStorageDetails;
      this._timeZone.internalValue = value.timeZone;
    }
  }

  // additional_flash_cache_percent - computed: true, optional: true, required: false
  private _additionalFlashCachePercent?: number; 
  public get additionalFlashCachePercent() {
    return this.getNumberAttribute('additional_flash_cache_percent');
  }
  public set additionalFlashCachePercent(value: number) {
    this._additionalFlashCachePercent = value;
  }
  public resetAdditionalFlashCachePercent() {
    this._additionalFlashCachePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalFlashCachePercentInput() {
    return this._additionalFlashCachePercent;
  }

  // attached_shape_attributes - computed: true, optional: false, required: false
  public get attachedShapeAttributes() {
    return this.getListAttribute('attached_shape_attributes');
  }

  // available_shape_attributes - computed: true, optional: false, required: false
  public get availableShapeAttributes() {
    return this.getListAttribute('available_shape_attributes');
  }

  // oci_uri - computed: true, optional: false, required: false
  public get ociUri() {
    return this.getStringAttribute('oci_uri');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vm_cluster_count - computed: true, optional: false, required: false
  public get vmClusterCount() {
    return this.getNumberAttribute('vm_cluster_count');
  }

  // vm_cluster_ids - computed: true, optional: false, required: false
  public get vmClusterIds() {
    return this.getListAttribute('vm_cluster_ids');
  }

  // exascale_db_storage_details - computed: false, optional: false, required: true
  private _exascaleDbStorageDetails = new OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference(this, "exascale_db_storage_details");
  public get exascaleDbStorageDetails() {
    return this._exascaleDbStorageDetails;
  }
  public putExascaleDbStorageDetails(value: OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails) {
    this._exascaleDbStorageDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exascaleDbStorageDetailsInput() {
    return this._exascaleDbStorageDetails.internalValue;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone = new OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference(this, "time_zone");
  public get timeZone() {
    return this._timeZone;
  }
  public putTimeZone(value: OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone) {
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
export interface OracleDatabaseExascaleDbStorageVaultTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#create OracleDatabaseExascaleDbStorageVault#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#delete OracleDatabaseExascaleDbStorageVault#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#update OracleDatabaseExascaleDbStorageVault#update}
  */
  readonly update?: string;
}

export function oracleDatabaseExascaleDbStorageVaultTimeoutsToTerraform(struct?: OracleDatabaseExascaleDbStorageVaultTimeouts | cdktn.IResolvable): any {
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


export function oracleDatabaseExascaleDbStorageVaultTimeoutsToHclTerraform(struct?: OracleDatabaseExascaleDbStorageVaultTimeouts | cdktn.IResolvable): any {
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

export class OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OracleDatabaseExascaleDbStorageVaultTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OracleDatabaseExascaleDbStorageVaultTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault google_oracle_database_exascale_db_storage_vault}
*/
export class OracleDatabaseExascaleDbStorageVault extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_oracle_database_exascale_db_storage_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OracleDatabaseExascaleDbStorageVault to import
  * @param importFromId The id of the existing OracleDatabaseExascaleDbStorageVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OracleDatabaseExascaleDbStorageVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_oracle_database_exascale_db_storage_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault google_oracle_database_exascale_db_storage_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OracleDatabaseExascaleDbStorageVaultConfig
  */
  public constructor(scope: Construct, id: string, config: OracleDatabaseExascaleDbStorageVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'google_oracle_database_exascale_db_storage_vault',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.41.0',
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
    this._deletionProtection = config.deletionProtection;
    this._displayName = config.displayName;
    this._exadataInfrastructure = config.exadataInfrastructure;
    this._exascaleDbStorageVaultId = config.exascaleDbStorageVaultId;
    this._gcpOracleZone = config.gcpOracleZone;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
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

  // exadata_infrastructure - computed: false, optional: true, required: false
  private _exadataInfrastructure?: string; 
  public get exadataInfrastructure() {
    return this.getStringAttribute('exadata_infrastructure');
  }
  public set exadataInfrastructure(value: string) {
    this._exadataInfrastructure = value;
  }
  public resetExadataInfrastructure() {
    this._exadataInfrastructure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataInfrastructureInput() {
    return this._exadataInfrastructure;
  }

  // exascale_db_storage_vault_id - computed: false, optional: false, required: true
  private _exascaleDbStorageVaultId?: string; 
  public get exascaleDbStorageVaultId() {
    return this.getStringAttribute('exascale_db_storage_vault_id');
  }
  public set exascaleDbStorageVaultId(value: string) {
    this._exascaleDbStorageVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exascaleDbStorageVaultIdInput() {
    return this._exascaleDbStorageVaultId;
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
  private _properties = new OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OracleDatabaseExascaleDbStorageVaultProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OracleDatabaseExascaleDbStorageVaultTimeouts) {
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
      deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
      display_name: cdktn.stringToTerraform(this._displayName),
      exadata_infrastructure: cdktn.stringToTerraform(this._exadataInfrastructure),
      exascale_db_storage_vault_id: cdktn.stringToTerraform(this._exascaleDbStorageVaultId),
      gcp_oracle_zone: cdktn.stringToTerraform(this._gcpOracleZone),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      properties: oracleDatabaseExascaleDbStorageVaultPropertiesToTerraform(this._properties.internalValue),
      timeouts: oracleDatabaseExascaleDbStorageVaultTimeoutsToTerraform(this._timeouts.internalValue),
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
      exadata_infrastructure: {
        value: cdktn.stringToHclTerraform(this._exadataInfrastructure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exascale_db_storage_vault_id: {
        value: cdktn.stringToHclTerraform(this._exascaleDbStorageVaultId),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: oracleDatabaseExascaleDbStorageVaultPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleDatabaseExascaleDbStorageVaultPropertiesList",
      },
      timeouts: {
        value: oracleDatabaseExascaleDbStorageVaultTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OracleDatabaseExascaleDbStorageVaultTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
