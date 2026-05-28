/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AlloydbClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
  * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#annotations AlloydbCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The ID of the alloydb cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#cluster_id AlloydbCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The type of cluster. If not set, defaults to PRIMARY. Default value: "PRIMARY" Possible values: ["PRIMARY", "SECONDARY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#cluster_type AlloydbCluster#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * The database engine major version. This is an optional field and it's populated at the Cluster creation time.
  * Note: Changing this field to a higer version results in upgrading the AlloyDB cluster which is an irreversible change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#database_version AlloydbCluster#database_version}
  */
  readonly databaseVersion?: string;
  /**
  * This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/alloydb_cluster.html.markdown for specifics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#deletion_policy AlloydbCluster#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Whether Terraform will be prevented from destroying the cluster.
  * When the field is set to true or unset in Terraform state, a 'terraform apply'
  * or 'terraform destroy' that would delete the cluster will fail.
  * When the field is set to false, deleting the cluster is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#deletion_protection AlloydbCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktn.IResolvable;
  /**
  * User-settable and human-readable display name for the Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#display_name AlloydbCluster#display_name}
  */
  readonly displayName?: string;
  /**
  * For Resource freshness validation (https://google.aip.dev/154)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#etag AlloydbCluster#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#id AlloydbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for the alloydb cluster.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#labels AlloydbCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the alloydb cluster should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#location AlloydbCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#project AlloydbCluster#project}
  */
  readonly project?: string;
  /**
  * Set to true to skip awaiting on the major version upgrade of the cluster.
  * Possible values: true, false
  * Default value: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#skip_await_major_version_upgrade AlloydbCluster#skip_await_major_version_upgrade}
  */
  readonly skipAwaitMajorVersionUpgrade?: boolean | cdktn.IResolvable;
  /**
  * The subscrition type of cluster. Possible values: ["TRIAL", "STANDARD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#subscription_type AlloydbCluster#subscription_type}
  */
  readonly subscriptionType?: string;
  /**
  * automated_backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#automated_backup_policy AlloydbCluster#automated_backup_policy}
  */
  readonly automatedBackupPolicy?: AlloydbClusterAutomatedBackupPolicy;
  /**
  * continuous_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#continuous_backup_config AlloydbCluster#continuous_backup_config}
  */
  readonly continuousBackupConfig?: AlloydbClusterContinuousBackupConfig;
  /**
  * dataplex_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#dataplex_config AlloydbCluster#dataplex_config}
  */
  readonly dataplexConfig?: AlloydbClusterDataplexConfig;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#encryption_config AlloydbCluster#encryption_config}
  */
  readonly encryptionConfig?: AlloydbClusterEncryptionConfig;
  /**
  * initial_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#initial_user AlloydbCluster#initial_user}
  */
  readonly initialUser?: AlloydbClusterInitialUser;
  /**
  * maintenance_update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#maintenance_update_policy AlloydbCluster#maintenance_update_policy}
  */
  readonly maintenanceUpdatePolicy?: AlloydbClusterMaintenanceUpdatePolicy;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#network_config AlloydbCluster#network_config}
  */
  readonly networkConfig?: AlloydbClusterNetworkConfig;
  /**
  * psc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#psc_config AlloydbCluster#psc_config}
  */
  readonly pscConfig?: AlloydbClusterPscConfig;
  /**
  * restore_backup_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#restore_backup_source AlloydbCluster#restore_backup_source}
  */
  readonly restoreBackupSource?: AlloydbClusterRestoreBackupSource;
  /**
  * restore_backupdr_backup_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#restore_backupdr_backup_source AlloydbCluster#restore_backupdr_backup_source}
  */
  readonly restoreBackupdrBackupSource?: AlloydbClusterRestoreBackupdrBackupSource;
  /**
  * restore_backupdr_pitr_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#restore_backupdr_pitr_source AlloydbCluster#restore_backupdr_pitr_source}
  */
  readonly restoreBackupdrPitrSource?: AlloydbClusterRestoreBackupdrPitrSource;
  /**
  * restore_continuous_backup_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#restore_continuous_backup_source AlloydbCluster#restore_continuous_backup_source}
  */
  readonly restoreContinuousBackupSource?: AlloydbClusterRestoreContinuousBackupSource;
  /**
  * secondary_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#secondary_config AlloydbCluster#secondary_config}
  */
  readonly secondaryConfig?: AlloydbClusterSecondaryConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#timeouts AlloydbCluster#timeouts}
  */
  readonly timeouts?: AlloydbClusterTimeouts;
}
export interface AlloydbClusterBackupSource {
}

export function alloydbClusterBackupSourceToTerraform(struct?: AlloydbClusterBackupSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function alloydbClusterBackupSourceToHclTerraform(struct?: AlloydbClusterBackupSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AlloydbClusterBackupSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlloydbClusterBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterBackupSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_name - computed: true, optional: false, required: false
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
}

export class AlloydbClusterBackupSourceList extends cdktn.ComplexList {

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
  public get(index: number): AlloydbClusterBackupSourceOutputReference {
    return new AlloydbClusterBackupSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterBackupdrBackupSource {
}

export function alloydbClusterBackupdrBackupSourceToTerraform(struct?: AlloydbClusterBackupdrBackupSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function alloydbClusterBackupdrBackupSourceToHclTerraform(struct?: AlloydbClusterBackupdrBackupSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AlloydbClusterBackupdrBackupSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlloydbClusterBackupdrBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterBackupdrBackupSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup - computed: true, optional: false, required: false
  public get backup() {
    return this.getStringAttribute('backup');
  }
}

export class AlloydbClusterBackupdrBackupSourceList extends cdktn.ComplexList {

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
  public get(index: number): AlloydbClusterBackupdrBackupSourceOutputReference {
    return new AlloydbClusterBackupdrBackupSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterContinuousBackupInfoEncryptionInfo {
}

export function alloydbClusterContinuousBackupInfoEncryptionInfoToTerraform(struct?: AlloydbClusterContinuousBackupInfoEncryptionInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function alloydbClusterContinuousBackupInfoEncryptionInfoToHclTerraform(struct?: AlloydbClusterContinuousBackupInfoEncryptionInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlloydbClusterContinuousBackupInfoEncryptionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterContinuousBackupInfoEncryptionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // kms_key_versions - computed: true, optional: false, required: false
  public get kmsKeyVersions() {
    return this.getListAttribute('kms_key_versions');
  }
}

export class AlloydbClusterContinuousBackupInfoEncryptionInfoList extends cdktn.ComplexList {

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
  public get(index: number): AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference {
    return new AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterContinuousBackupInfo {
}

export function alloydbClusterContinuousBackupInfoToTerraform(struct?: AlloydbClusterContinuousBackupInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function alloydbClusterContinuousBackupInfoToHclTerraform(struct?: AlloydbClusterContinuousBackupInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AlloydbClusterContinuousBackupInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlloydbClusterContinuousBackupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterContinuousBackupInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // earliest_restorable_time - computed: true, optional: false, required: false
  public get earliestRestorableTime() {
    return this.getStringAttribute('earliest_restorable_time');
  }

  // enabled_time - computed: true, optional: false, required: false
  public get enabledTime() {
    return this.getStringAttribute('enabled_time');
  }

  // encryption_info - computed: true, optional: false, required: false
  private _encryptionInfo = new AlloydbClusterContinuousBackupInfoEncryptionInfoList(this, "encryption_info", false);
  public get encryptionInfo() {
    return this._encryptionInfo;
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getListAttribute('schedule');
  }
}

export class AlloydbClusterContinuousBackupInfoList extends cdktn.ComplexList {

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
  public get(index: number): AlloydbClusterContinuousBackupInfoOutputReference {
    return new AlloydbClusterContinuousBackupInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterEncryptionInfo {
}

export function alloydbClusterEncryptionInfoToTerraform(struct?: AlloydbClusterEncryptionInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function alloydbClusterEncryptionInfoToHclTerraform(struct?: AlloydbClusterEncryptionInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AlloydbClusterEncryptionInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlloydbClusterEncryptionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterEncryptionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // kms_key_versions - computed: true, optional: false, required: false
  public get kmsKeyVersions() {
    return this.getListAttribute('kms_key_versions');
  }
}

export class AlloydbClusterEncryptionInfoList extends cdktn.ComplexList {

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
  public get(index: number): AlloydbClusterEncryptionInfoOutputReference {
    return new AlloydbClusterEncryptionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterMigrationSource {
}

export function alloydbClusterMigrationSourceToTerraform(struct?: AlloydbClusterMigrationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function alloydbClusterMigrationSourceToHclTerraform(struct?: AlloydbClusterMigrationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AlloydbClusterMigrationSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlloydbClusterMigrationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterMigrationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class AlloydbClusterMigrationSourceList extends cdktn.ComplexList {

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
  public get(index: number): AlloydbClusterMigrationSourceOutputReference {
    return new AlloydbClusterMigrationSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterTrialMetadata {
}

export function alloydbClusterTrialMetadataToTerraform(struct?: AlloydbClusterTrialMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function alloydbClusterTrialMetadataToHclTerraform(struct?: AlloydbClusterTrialMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AlloydbClusterTrialMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlloydbClusterTrialMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterTrialMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // grace_end_time - computed: true, optional: false, required: false
  public get graceEndTime() {
    return this.getStringAttribute('grace_end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // upgrade_time - computed: true, optional: false, required: false
  public get upgradeTime() {
    return this.getStringAttribute('upgrade_time');
  }
}

export class AlloydbClusterTrialMetadataList extends cdktn.ComplexList {

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
  public get(index: number): AlloydbClusterTrialMetadataOutputReference {
    return new AlloydbClusterTrialMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterAutomatedBackupPolicyEncryptionConfig {
  /**
  * The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#kms_key_name AlloydbCluster#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function alloydbClusterAutomatedBackupPolicyEncryptionConfigToTerraform(struct?: AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference | AlloydbClusterAutomatedBackupPolicyEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function alloydbClusterAutomatedBackupPolicyEncryptionConfigToHclTerraform(struct?: AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference | AlloydbClusterAutomatedBackupPolicyEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterAutomatedBackupPolicyEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterAutomatedBackupPolicyEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention {
  /**
  * The number of backups to retain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#count AlloydbCluster#count}
  */
  readonly count?: number;
}

export function alloydbClusterAutomatedBackupPolicyQuantityBasedRetentionToTerraform(struct?: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference | AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
  }
}


export function alloydbClusterAutomatedBackupPolicyQuantityBasedRetentionToHclTerraform(struct?: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference | AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface AlloydbClusterAutomatedBackupPolicyTimeBasedRetention {
  /**
  * The retention period.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#retention_period AlloydbCluster#retention_period}
  */
  readonly retentionPeriod?: string;
}

export function alloydbClusterAutomatedBackupPolicyTimeBasedRetentionToTerraform(struct?: AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference | AlloydbClusterAutomatedBackupPolicyTimeBasedRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_period: cdktn.stringToTerraform(struct!.retentionPeriod),
  }
}


export function alloydbClusterAutomatedBackupPolicyTimeBasedRetentionToHclTerraform(struct?: AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference | AlloydbClusterAutomatedBackupPolicyTimeBasedRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_period: {
      value: cdktn.stringToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterAutomatedBackupPolicyTimeBasedRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterAutomatedBackupPolicyTimeBasedRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionPeriod = value.retentionPeriod;
    }
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}
export interface AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#hours AlloydbCluster#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#minutes AlloydbCluster#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#nanos AlloydbCluster#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#seconds AlloydbCluster#seconds}
  */
  readonly seconds?: number;
}

export function alloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesToTerraform(struct?: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.numberToTerraform(struct!.seconds),
  }
}


export function alloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesToHclTerraform(struct?: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}

export class AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList extends cdktn.ComplexList {
  public internalValue? : AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[] | cdktn.IResolvable

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
  public get(index: number): AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference {
    return new AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterAutomatedBackupPolicyWeeklySchedule {
  /**
  * The days of the week to perform a backup. At least one day of the week must be provided. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#days_of_week AlloydbCluster#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * start_times block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#start_times AlloydbCluster#start_times}
  */
  readonly startTimes: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[] | cdktn.IResolvable;
}

export function alloydbClusterAutomatedBackupPolicyWeeklyScheduleToTerraform(struct?: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference | AlloydbClusterAutomatedBackupPolicyWeeklySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.daysOfWeek),
    start_times: cdktn.listMapper(alloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesToTerraform, true)(struct!.startTimes),
  }
}


export function alloydbClusterAutomatedBackupPolicyWeeklyScheduleToHclTerraform(struct?: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference | AlloydbClusterAutomatedBackupPolicyWeeklySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    start_times: {
      value: cdktn.listMapperHcl(alloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesToHclTerraform, true)(struct!.startTimes),
      isBlock: true,
      type: "list",
      storageClassType: "AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterAutomatedBackupPolicyWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._startTimes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimes = this._startTimes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterAutomatedBackupPolicyWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._startTimes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._startTimes.internalValue = value.startTimes;
    }
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // start_times - computed: false, optional: false, required: true
  private _startTimes = new AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList(this, "start_times", false);
  public get startTimes() {
    return this._startTimes;
  }
  public putStartTimes(value: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[] | cdktn.IResolvable) {
    this._startTimes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimesInput() {
    return this._startTimes.internalValue;
  }
}
export interface AlloydbClusterAutomatedBackupPolicy {
  /**
  * The length of the time window during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed.
  * 
  * The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour.
  * 
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#backup_window AlloydbCluster#backup_window}
  */
  readonly backupWindow?: string;
  /**
  * Whether automated backups are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#enabled AlloydbCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Labels to apply to backups created using this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#labels AlloydbCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#location AlloydbCluster#location}
  */
  readonly location?: string;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#encryption_config AlloydbCluster#encryption_config}
  */
  readonly encryptionConfig?: AlloydbClusterAutomatedBackupPolicyEncryptionConfig;
  /**
  * quantity_based_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#quantity_based_retention AlloydbCluster#quantity_based_retention}
  */
  readonly quantityBasedRetention?: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention;
  /**
  * time_based_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#time_based_retention AlloydbCluster#time_based_retention}
  */
  readonly timeBasedRetention?: AlloydbClusterAutomatedBackupPolicyTimeBasedRetention;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#weekly_schedule AlloydbCluster#weekly_schedule}
  */
  readonly weeklySchedule?: AlloydbClusterAutomatedBackupPolicyWeeklySchedule;
}

export function alloydbClusterAutomatedBackupPolicyToTerraform(struct?: AlloydbClusterAutomatedBackupPolicyOutputReference | AlloydbClusterAutomatedBackupPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_window: cdktn.stringToTerraform(struct!.backupWindow),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
    location: cdktn.stringToTerraform(struct!.location),
    encryption_config: alloydbClusterAutomatedBackupPolicyEncryptionConfigToTerraform(struct!.encryptionConfig),
    quantity_based_retention: alloydbClusterAutomatedBackupPolicyQuantityBasedRetentionToTerraform(struct!.quantityBasedRetention),
    time_based_retention: alloydbClusterAutomatedBackupPolicyTimeBasedRetentionToTerraform(struct!.timeBasedRetention),
    weekly_schedule: alloydbClusterAutomatedBackupPolicyWeeklyScheduleToTerraform(struct!.weeklySchedule),
  }
}


export function alloydbClusterAutomatedBackupPolicyToHclTerraform(struct?: AlloydbClusterAutomatedBackupPolicyOutputReference | AlloydbClusterAutomatedBackupPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_window: {
      value: cdktn.stringToHclTerraform(struct!.backupWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_config: {
      value: alloydbClusterAutomatedBackupPolicyEncryptionConfigToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AlloydbClusterAutomatedBackupPolicyEncryptionConfigList",
    },
    quantity_based_retention: {
      value: alloydbClusterAutomatedBackupPolicyQuantityBasedRetentionToHclTerraform(struct!.quantityBasedRetention),
      isBlock: true,
      type: "list",
      storageClassType: "AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList",
    },
    time_based_retention: {
      value: alloydbClusterAutomatedBackupPolicyTimeBasedRetentionToHclTerraform(struct!.timeBasedRetention),
      isBlock: true,
      type: "list",
      storageClassType: "AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList",
    },
    weekly_schedule: {
      value: alloydbClusterAutomatedBackupPolicyWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "AlloydbClusterAutomatedBackupPolicyWeeklyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterAutomatedBackupPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterAutomatedBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupWindow = this._backupWindow;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._quantityBasedRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityBasedRetention = this._quantityBasedRetention?.internalValue;
    }
    if (this._timeBasedRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedRetention = this._timeBasedRetention?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterAutomatedBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupWindow = undefined;
      this._enabled = undefined;
      this._labels = undefined;
      this._location = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._quantityBasedRetention.internalValue = undefined;
      this._timeBasedRetention.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupWindow = value.backupWindow;
      this._enabled = value.enabled;
      this._labels = value.labels;
      this._location = value.location;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._quantityBasedRetention.internalValue = value.quantityBasedRetention;
      this._timeBasedRetention.internalValue = value.timeBasedRetention;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // backup_window - computed: true, optional: true, required: false
  private _backupWindow?: string; 
  public get backupWindow() {
    return this.getStringAttribute('backup_window');
  }
  public set backupWindow(value: string) {
    this._backupWindow = value;
  }
  public resetBackupWindow() {
    this._backupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowInput() {
    return this._backupWindow;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: AlloydbClusterAutomatedBackupPolicyEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // quantity_based_retention - computed: false, optional: true, required: false
  private _quantityBasedRetention = new AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference(this, "quantity_based_retention");
  public get quantityBasedRetention() {
    return this._quantityBasedRetention;
  }
  public putQuantityBasedRetention(value: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention) {
    this._quantityBasedRetention.internalValue = value;
  }
  public resetQuantityBasedRetention() {
    this._quantityBasedRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityBasedRetentionInput() {
    return this._quantityBasedRetention.internalValue;
  }

  // time_based_retention - computed: false, optional: true, required: false
  private _timeBasedRetention = new AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference(this, "time_based_retention");
  public get timeBasedRetention() {
    return this._timeBasedRetention;
  }
  public putTimeBasedRetention(value: AlloydbClusterAutomatedBackupPolicyTimeBasedRetention) {
    this._timeBasedRetention.internalValue = value;
  }
  public resetTimeBasedRetention() {
    this._timeBasedRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedRetentionInput() {
    return this._timeBasedRetention.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: AlloydbClusterAutomatedBackupPolicyWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }
}
export interface AlloydbClusterContinuousBackupConfigEncryptionConfig {
  /**
  * The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#kms_key_name AlloydbCluster#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function alloydbClusterContinuousBackupConfigEncryptionConfigToTerraform(struct?: AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference | AlloydbClusterContinuousBackupConfigEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function alloydbClusterContinuousBackupConfigEncryptionConfigToHclTerraform(struct?: AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference | AlloydbClusterContinuousBackupConfigEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterContinuousBackupConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterContinuousBackupConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface AlloydbClusterContinuousBackupConfig {
  /**
  * Whether continuous backup recovery is enabled. If not set, defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#enabled AlloydbCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The numbers of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window.
  * 
  * If not set, defaults to 14 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#recovery_window_days AlloydbCluster#recovery_window_days}
  */
  readonly recoveryWindowDays?: number;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#encryption_config AlloydbCluster#encryption_config}
  */
  readonly encryptionConfig?: AlloydbClusterContinuousBackupConfigEncryptionConfig;
}

export function alloydbClusterContinuousBackupConfigToTerraform(struct?: AlloydbClusterContinuousBackupConfigOutputReference | AlloydbClusterContinuousBackupConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    recovery_window_days: cdktn.numberToTerraform(struct!.recoveryWindowDays),
    encryption_config: alloydbClusterContinuousBackupConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
  }
}


export function alloydbClusterContinuousBackupConfigToHclTerraform(struct?: AlloydbClusterContinuousBackupConfigOutputReference | AlloydbClusterContinuousBackupConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recovery_window_days: {
      value: cdktn.numberToHclTerraform(struct!.recoveryWindowDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption_config: {
      value: alloydbClusterContinuousBackupConfigEncryptionConfigToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AlloydbClusterContinuousBackupConfigEncryptionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterContinuousBackupConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterContinuousBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._recoveryWindowDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindowDays = this._recoveryWindowDays;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterContinuousBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._recoveryWindowDays = undefined;
      this._encryptionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._recoveryWindowDays = value.recoveryWindowDays;
      this._encryptionConfig.internalValue = value.encryptionConfig;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // recovery_window_days - computed: true, optional: true, required: false
  private _recoveryWindowDays?: number; 
  public get recoveryWindowDays() {
    return this.getNumberAttribute('recovery_window_days');
  }
  public set recoveryWindowDays(value: number) {
    this._recoveryWindowDays = value;
  }
  public resetRecoveryWindowDays() {
    this._recoveryWindowDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowDaysInput() {
    return this._recoveryWindowDays;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: AlloydbClusterContinuousBackupConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }
}
export interface AlloydbClusterDataplexConfig {
  /**
  * Indicates whether Dataplex integration is enabled for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#enabled AlloydbCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function alloydbClusterDataplexConfigToTerraform(struct?: AlloydbClusterDataplexConfigOutputReference | AlloydbClusterDataplexConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function alloydbClusterDataplexConfigToHclTerraform(struct?: AlloydbClusterDataplexConfigOutputReference | AlloydbClusterDataplexConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterDataplexConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterDataplexConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterDataplexConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AlloydbClusterEncryptionConfig {
  /**
  * The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#kms_key_name AlloydbCluster#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function alloydbClusterEncryptionConfigToTerraform(struct?: AlloydbClusterEncryptionConfigOutputReference | AlloydbClusterEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function alloydbClusterEncryptionConfigToHclTerraform(struct?: AlloydbClusterEncryptionConfigOutputReference | AlloydbClusterEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface AlloydbClusterInitialUser {
  /**
  * The initial password for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#password AlloydbCluster#password}
  */
  readonly password?: string;
  /**
  * The initial password for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#password_wo AlloydbCluster#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Triggers update of 'password_wo' write-only. Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#password_wo_version AlloydbCluster#password_wo_version}
  */
  readonly passwordWoVersion?: string;
  /**
  * The database username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#user AlloydbCluster#user}
  */
  readonly user?: string;
}

export function alloydbClusterInitialUserToTerraform(struct?: AlloydbClusterInitialUserOutputReference | AlloydbClusterInitialUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    password_wo: cdktn.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktn.stringToTerraform(struct!.passwordWoVersion),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function alloydbClusterInitialUserToHclTerraform(struct?: AlloydbClusterInitialUserOutputReference | AlloydbClusterInitialUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktn.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterInitialUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterInitialUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterInitialUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
      this._user = value.user;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: string; 
  public get passwordWoVersion() {
    return this.getStringAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: string) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#hours AlloydbCluster#hours}
  */
  readonly hours: number;
  /**
  * Minutes of hour of day. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#minutes AlloydbCluster#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#nanos AlloydbCluster#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#seconds AlloydbCluster#seconds}
  */
  readonly seconds?: number;
}

export function alloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeToTerraform(struct?: AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference | AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.numberToTerraform(struct!.seconds),
  }
}


export function alloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeToHclTerraform(struct?: AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference | AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: false, required: true
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows {
  /**
  * Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#day AlloydbCluster#day}
  */
  readonly day: string;
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#start_time AlloydbCluster#start_time}
  */
  readonly startTime: AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime;
}

export function alloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsToTerraform(struct?: AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktn.stringToTerraform(struct!.day),
    start_time: alloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeToTerraform(struct!.startTime),
  }
}


export function alloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsToHclTerraform(struct?: AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktn.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: alloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._startTime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._startTime.internalValue = value.startTime;
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

  // start_time - computed: false, optional: false, required: true
  private _startTime = new AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime) {
    this._startTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}

export class AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList extends cdktn.ComplexList {
  public internalValue? : AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows[] | cdktn.IResolvable

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
  public get(index: number): AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference {
    return new AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterMaintenanceUpdatePolicy {
  /**
  * maintenance_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#maintenance_windows AlloydbCluster#maintenance_windows}
  */
  readonly maintenanceWindows?: AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows[] | cdktn.IResolvable;
}

export function alloydbClusterMaintenanceUpdatePolicyToTerraform(struct?: AlloydbClusterMaintenanceUpdatePolicyOutputReference | AlloydbClusterMaintenanceUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_windows: cdktn.listMapper(alloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsToTerraform, true)(struct!.maintenanceWindows),
  }
}


export function alloydbClusterMaintenanceUpdatePolicyToHclTerraform(struct?: AlloydbClusterMaintenanceUpdatePolicyOutputReference | AlloydbClusterMaintenanceUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_windows: {
      value: cdktn.listMapperHcl(alloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsToHclTerraform, true)(struct!.maintenanceWindows),
      isBlock: true,
      type: "list",
      storageClassType: "AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterMaintenanceUpdatePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterMaintenanceUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindows = this._maintenanceWindows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterMaintenanceUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceWindows.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceWindows.internalValue = value.maintenanceWindows;
    }
  }

  // maintenance_windows - computed: false, optional: true, required: false
  private _maintenanceWindows = new AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList(this, "maintenance_windows", false);
  public get maintenanceWindows() {
    return this._maintenanceWindows;
  }
  public putMaintenanceWindows(value: AlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows[] | cdktn.IResolvable) {
    this._maintenanceWindows.internalValue = value;
  }
  public resetMaintenanceWindows() {
    this._maintenanceWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowsInput() {
    return this._maintenanceWindows.internalValue;
  }
}
export interface AlloydbClusterNetworkConfig {
  /**
  * The name of the allocated IP range for the private IP AlloyDB cluster. For example: "google-managed-services-default".
  * If set, the instance IPs for this cluster will be created in the allocated range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#allocated_ip_range AlloydbCluster#allocated_ip_range}
  */
  readonly allocatedIpRange?: string;
  /**
  * The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.
  * It is specified in the form: "projects/{projectNumber}/global/networks/{network_id}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#network AlloydbCluster#network}
  */
  readonly network?: string;
}

export function alloydbClusterNetworkConfigToTerraform(struct?: AlloydbClusterNetworkConfigOutputReference | AlloydbClusterNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_ip_range: cdktn.stringToTerraform(struct!.allocatedIpRange),
    network: cdktn.stringToTerraform(struct!.network),
  }
}


export function alloydbClusterNetworkConfigToHclTerraform(struct?: AlloydbClusterNetworkConfigOutputReference | AlloydbClusterNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_ip_range: {
      value: cdktn.stringToHclTerraform(struct!.allocatedIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedIpRange = this._allocatedIpRange;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocatedIpRange = undefined;
      this._network = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocatedIpRange = value.allocatedIpRange;
      this._network = value.network;
    }
  }

  // allocated_ip_range - computed: false, optional: true, required: false
  private _allocatedIpRange?: string; 
  public get allocatedIpRange() {
    return this.getStringAttribute('allocated_ip_range');
  }
  public set allocatedIpRange(value: string) {
    this._allocatedIpRange = value;
  }
  public resetAllocatedIpRange() {
    this._allocatedIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpRangeInput() {
    return this._allocatedIpRange;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}
export interface AlloydbClusterPscConfig {
  /**
  * Create an instance that allows connections from Private Service Connect endpoints to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#psc_enabled AlloydbCluster#psc_enabled}
  */
  readonly pscEnabled?: boolean | cdktn.IResolvable;
}

export function alloydbClusterPscConfigToTerraform(struct?: AlloydbClusterPscConfigOutputReference | AlloydbClusterPscConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    psc_enabled: cdktn.booleanToTerraform(struct!.pscEnabled),
  }
}


export function alloydbClusterPscConfigToHclTerraform(struct?: AlloydbClusterPscConfigOutputReference | AlloydbClusterPscConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    psc_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.pscEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterPscConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterPscConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pscEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscEnabled = this._pscEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterPscConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pscEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pscEnabled = value.pscEnabled;
    }
  }

  // psc_enabled - computed: false, optional: true, required: false
  private _pscEnabled?: boolean | cdktn.IResolvable; 
  public get pscEnabled() {
    return this.getBooleanAttribute('psc_enabled');
  }
  public set pscEnabled(value: boolean | cdktn.IResolvable) {
    this._pscEnabled = value;
  }
  public resetPscEnabled() {
    this._pscEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscEnabledInput() {
    return this._pscEnabled;
  }

  // service_owned_project_number - computed: true, optional: false, required: false
  public get serviceOwnedProjectNumber() {
    return this.getNumberAttribute('service_owned_project_number');
  }
}
export interface AlloydbClusterRestoreBackupSource {
  /**
  * The name of the backup that this cluster is restored from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#backup_name AlloydbCluster#backup_name}
  */
  readonly backupName: string;
}

export function alloydbClusterRestoreBackupSourceToTerraform(struct?: AlloydbClusterRestoreBackupSourceOutputReference | AlloydbClusterRestoreBackupSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_name: cdktn.stringToTerraform(struct!.backupName),
  }
}


export function alloydbClusterRestoreBackupSourceToHclTerraform(struct?: AlloydbClusterRestoreBackupSourceOutputReference | AlloydbClusterRestoreBackupSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_name: {
      value: cdktn.stringToHclTerraform(struct!.backupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterRestoreBackupSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterRestoreBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupName = this._backupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterRestoreBackupSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupName = value.backupName;
    }
  }

  // backup_name - computed: false, optional: false, required: true
  private _backupName?: string; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string) {
    this._backupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName;
  }
}
export interface AlloydbClusterRestoreBackupdrBackupSource {
  /**
  * The name of the BackupDR backup that this cluster is restored from. It must be of the format "projects/[PROJECT]/locations/[LOCATION]/backupVaults/[VAULT_ID]/dataSources/[DATASOURCE_ID]/backups/[BACKUP_ID]"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#backup AlloydbCluster#backup}
  */
  readonly backup: string;
}

export function alloydbClusterRestoreBackupdrBackupSourceToTerraform(struct?: AlloydbClusterRestoreBackupdrBackupSourceOutputReference | AlloydbClusterRestoreBackupdrBackupSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktn.stringToTerraform(struct!.backup),
  }
}


export function alloydbClusterRestoreBackupdrBackupSourceToHclTerraform(struct?: AlloydbClusterRestoreBackupdrBackupSourceOutputReference | AlloydbClusterRestoreBackupdrBackupSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: cdktn.stringToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterRestoreBackupdrBackupSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterRestoreBackupdrBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterRestoreBackupdrBackupSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backup = value.backup;
    }
  }

  // backup - computed: false, optional: false, required: true
  private _backup?: string; 
  public get backup() {
    return this.getStringAttribute('backup');
  }
  public set backup(value: string) {
    this._backup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }
}
export interface AlloydbClusterRestoreBackupdrPitrSource {
  /**
  * The name of the BackupDR data source that this cluster is restore from. It must be of the format "projects/[PROJECT]/locations/[LOCATION]/backupVaults/[VAULT_ID]/dataSources/[DATASOURCE_ID]"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#data_source AlloydbCluster#data_source}
  */
  readonly dataSource: string;
  /**
  * The point in time that this cluster is restored to, in RFC 3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#point_in_time AlloydbCluster#point_in_time}
  */
  readonly pointInTime: string;
}

export function alloydbClusterRestoreBackupdrPitrSourceToTerraform(struct?: AlloydbClusterRestoreBackupdrPitrSourceOutputReference | AlloydbClusterRestoreBackupdrPitrSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    point_in_time: cdktn.stringToTerraform(struct!.pointInTime),
  }
}


export function alloydbClusterRestoreBackupdrPitrSourceToHclTerraform(struct?: AlloydbClusterRestoreBackupdrPitrSourceOutputReference | AlloydbClusterRestoreBackupdrPitrSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    point_in_time: {
      value: cdktn.stringToHclTerraform(struct!.pointInTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterRestoreBackupdrPitrSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterRestoreBackupdrPitrSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._pointInTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTime = this._pointInTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterRestoreBackupdrPitrSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._pointInTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._pointInTime = value.pointInTime;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // point_in_time - computed: false, optional: false, required: true
  private _pointInTime?: string; 
  public get pointInTime() {
    return this.getStringAttribute('point_in_time');
  }
  public set pointInTime(value: string) {
    this._pointInTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeInput() {
    return this._pointInTime;
  }
}
export interface AlloydbClusterRestoreContinuousBackupSource {
  /**
  * The name of the source cluster that this cluster is restored from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#cluster AlloydbCluster#cluster}
  */
  readonly cluster: string;
  /**
  * The point in time that this cluster is restored to, in RFC 3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#point_in_time AlloydbCluster#point_in_time}
  */
  readonly pointInTime: string;
}

export function alloydbClusterRestoreContinuousBackupSourceToTerraform(struct?: AlloydbClusterRestoreContinuousBackupSourceOutputReference | AlloydbClusterRestoreContinuousBackupSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktn.stringToTerraform(struct!.cluster),
    point_in_time: cdktn.stringToTerraform(struct!.pointInTime),
  }
}


export function alloydbClusterRestoreContinuousBackupSourceToHclTerraform(struct?: AlloydbClusterRestoreContinuousBackupSourceOutputReference | AlloydbClusterRestoreContinuousBackupSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktn.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    point_in_time: {
      value: cdktn.stringToHclTerraform(struct!.pointInTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterRestoreContinuousBackupSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterRestoreContinuousBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._pointInTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTime = this._pointInTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterRestoreContinuousBackupSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._pointInTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._pointInTime = value.pointInTime;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // point_in_time - computed: false, optional: false, required: true
  private _pointInTime?: string; 
  public get pointInTime() {
    return this.getStringAttribute('point_in_time');
  }
  public set pointInTime(value: string) {
    this._pointInTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeInput() {
    return this._pointInTime;
  }
}
export interface AlloydbClusterSecondaryConfig {
  /**
  * Name of the primary cluster must be in the format
  * 'projects/{project}/locations/{location}/clusters/{cluster_id}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#primary_cluster_name AlloydbCluster#primary_cluster_name}
  */
  readonly primaryClusterName: string;
}

export function alloydbClusterSecondaryConfigToTerraform(struct?: AlloydbClusterSecondaryConfigOutputReference | AlloydbClusterSecondaryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_cluster_name: cdktn.stringToTerraform(struct!.primaryClusterName),
  }
}


export function alloydbClusterSecondaryConfigToHclTerraform(struct?: AlloydbClusterSecondaryConfigOutputReference | AlloydbClusterSecondaryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_cluster_name: {
      value: cdktn.stringToHclTerraform(struct!.primaryClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbClusterSecondaryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterSecondaryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryClusterName = this._primaryClusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterSecondaryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryClusterName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryClusterName = value.primaryClusterName;
    }
  }

  // primary_cluster_name - computed: false, optional: false, required: true
  private _primaryClusterName?: string; 
  public get primaryClusterName() {
    return this.getStringAttribute('primary_cluster_name');
  }
  public set primaryClusterName(value: string) {
    this._primaryClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryClusterNameInput() {
    return this._primaryClusterName;
  }
}
export interface AlloydbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#create AlloydbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#delete AlloydbCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#update AlloydbCluster#update}
  */
  readonly update?: string;
}

export function alloydbClusterTimeoutsToTerraform(struct?: AlloydbClusterTimeouts | cdktn.IResolvable): any {
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


export function alloydbClusterTimeoutsToHclTerraform(struct?: AlloydbClusterTimeouts | cdktn.IResolvable): any {
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

export class AlloydbClusterTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlloydbClusterTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AlloydbClusterTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster google_alloydb_cluster}
*/
export class AlloydbCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_alloydb_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AlloydbCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlloydbCluster to import
  * @param importFromId The id of the existing AlloydbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlloydbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_alloydb_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/alloydb_cluster google_alloydb_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlloydbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AlloydbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_alloydb_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.34.0',
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
    this._annotations = config.annotations;
    this._clusterId = config.clusterId;
    this._clusterType = config.clusterType;
    this._databaseVersion = config.databaseVersion;
    this._deletionPolicy = config.deletionPolicy;
    this._deletionProtection = config.deletionProtection;
    this._displayName = config.displayName;
    this._etag = config.etag;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._skipAwaitMajorVersionUpgrade = config.skipAwaitMajorVersionUpgrade;
    this._subscriptionType = config.subscriptionType;
    this._automatedBackupPolicy.internalValue = config.automatedBackupPolicy;
    this._continuousBackupConfig.internalValue = config.continuousBackupConfig;
    this._dataplexConfig.internalValue = config.dataplexConfig;
    this._encryptionConfig.internalValue = config.encryptionConfig;
    this._initialUser.internalValue = config.initialUser;
    this._maintenanceUpdatePolicy.internalValue = config.maintenanceUpdatePolicy;
    this._networkConfig.internalValue = config.networkConfig;
    this._pscConfig.internalValue = config.pscConfig;
    this._restoreBackupSource.internalValue = config.restoreBackupSource;
    this._restoreBackupdrBackupSource.internalValue = config.restoreBackupdrBackupSource;
    this._restoreBackupdrPitrSource.internalValue = config.restoreBackupdrPitrSource;
    this._restoreContinuousBackupSource.internalValue = config.restoreContinuousBackupSource;
    this._secondaryConfig.internalValue = config.secondaryConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // backup_source - computed: true, optional: false, required: false
  private _backupSource = new AlloydbClusterBackupSourceList(this, "backup_source", false);
  public get backupSource() {
    return this._backupSource;
  }

  // backupdr_backup_source - computed: true, optional: false, required: false
  private _backupdrBackupSource = new AlloydbClusterBackupdrBackupSourceList(this, "backupdr_backup_source", false);
  public get backupdrBackupSource() {
    return this._backupdrBackupSource;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // continuous_backup_info - computed: true, optional: false, required: false
  private _continuousBackupInfo = new AlloydbClusterContinuousBackupInfoList(this, "continuous_backup_info", false);
  public get continuousBackupInfo() {
    return this._continuousBackupInfo;
  }

  // database_version - computed: true, optional: true, required: false
  private _databaseVersion?: string; 
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }
  public set databaseVersion(value: string) {
    this._databaseVersion = value;
  }
  public resetDatabaseVersion() {
    this._databaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseVersionInput() {
    return this._databaseVersion;
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktn.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // encryption_info - computed: true, optional: false, required: false
  private _encryptionInfo = new AlloydbClusterEncryptionInfoList(this, "encryption_info", false);
  public get encryptionInfo() {
    return this._encryptionInfo;
  }

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // migration_source - computed: true, optional: false, required: false
  private _migrationSource = new AlloydbClusterMigrationSourceList(this, "migration_source", false);
  public get migrationSource() {
    return this._migrationSource;
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // skip_await_major_version_upgrade - computed: false, optional: true, required: false
  private _skipAwaitMajorVersionUpgrade?: boolean | cdktn.IResolvable; 
  public get skipAwaitMajorVersionUpgrade() {
    return this.getBooleanAttribute('skip_await_major_version_upgrade');
  }
  public set skipAwaitMajorVersionUpgrade(value: boolean | cdktn.IResolvable) {
    this._skipAwaitMajorVersionUpgrade = value;
  }
  public resetSkipAwaitMajorVersionUpgrade() {
    this._skipAwaitMajorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAwaitMajorVersionUpgradeInput() {
    return this._skipAwaitMajorVersionUpgrade;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_type - computed: true, optional: true, required: false
  private _subscriptionType?: string; 
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }
  public set subscriptionType(value: string) {
    this._subscriptionType = value;
  }
  public resetSubscriptionType() {
    this._subscriptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTypeInput() {
    return this._subscriptionType;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // trial_metadata - computed: true, optional: false, required: false
  private _trialMetadata = new AlloydbClusterTrialMetadataList(this, "trial_metadata", false);
  public get trialMetadata() {
    return this._trialMetadata;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // automated_backup_policy - computed: false, optional: true, required: false
  private _automatedBackupPolicy = new AlloydbClusterAutomatedBackupPolicyOutputReference(this, "automated_backup_policy");
  public get automatedBackupPolicy() {
    return this._automatedBackupPolicy;
  }
  public putAutomatedBackupPolicy(value: AlloydbClusterAutomatedBackupPolicy) {
    this._automatedBackupPolicy.internalValue = value;
  }
  public resetAutomatedBackupPolicy() {
    this._automatedBackupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedBackupPolicyInput() {
    return this._automatedBackupPolicy.internalValue;
  }

  // continuous_backup_config - computed: false, optional: true, required: false
  private _continuousBackupConfig = new AlloydbClusterContinuousBackupConfigOutputReference(this, "continuous_backup_config");
  public get continuousBackupConfig() {
    return this._continuousBackupConfig;
  }
  public putContinuousBackupConfig(value: AlloydbClusterContinuousBackupConfig) {
    this._continuousBackupConfig.internalValue = value;
  }
  public resetContinuousBackupConfig() {
    this._continuousBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousBackupConfigInput() {
    return this._continuousBackupConfig.internalValue;
  }

  // dataplex_config - computed: false, optional: true, required: false
  private _dataplexConfig = new AlloydbClusterDataplexConfigOutputReference(this, "dataplex_config");
  public get dataplexConfig() {
    return this._dataplexConfig;
  }
  public putDataplexConfig(value: AlloydbClusterDataplexConfig) {
    this._dataplexConfig.internalValue = value;
  }
  public resetDataplexConfig() {
    this._dataplexConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplexConfigInput() {
    return this._dataplexConfig.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new AlloydbClusterEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: AlloydbClusterEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // initial_user - computed: false, optional: true, required: false
  private _initialUser = new AlloydbClusterInitialUserOutputReference(this, "initial_user");
  public get initialUser() {
    return this._initialUser;
  }
  public putInitialUser(value: AlloydbClusterInitialUser) {
    this._initialUser.internalValue = value;
  }
  public resetInitialUser() {
    this._initialUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialUserInput() {
    return this._initialUser.internalValue;
  }

  // maintenance_update_policy - computed: false, optional: true, required: false
  private _maintenanceUpdatePolicy = new AlloydbClusterMaintenanceUpdatePolicyOutputReference(this, "maintenance_update_policy");
  public get maintenanceUpdatePolicy() {
    return this._maintenanceUpdatePolicy;
  }
  public putMaintenanceUpdatePolicy(value: AlloydbClusterMaintenanceUpdatePolicy) {
    this._maintenanceUpdatePolicy.internalValue = value;
  }
  public resetMaintenanceUpdatePolicy() {
    this._maintenanceUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceUpdatePolicyInput() {
    return this._maintenanceUpdatePolicy.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new AlloydbClusterNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: AlloydbClusterNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // psc_config - computed: false, optional: true, required: false
  private _pscConfig = new AlloydbClusterPscConfigOutputReference(this, "psc_config");
  public get pscConfig() {
    return this._pscConfig;
  }
  public putPscConfig(value: AlloydbClusterPscConfig) {
    this._pscConfig.internalValue = value;
  }
  public resetPscConfig() {
    this._pscConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscConfigInput() {
    return this._pscConfig.internalValue;
  }

  // restore_backup_source - computed: false, optional: true, required: false
  private _restoreBackupSource = new AlloydbClusterRestoreBackupSourceOutputReference(this, "restore_backup_source");
  public get restoreBackupSource() {
    return this._restoreBackupSource;
  }
  public putRestoreBackupSource(value: AlloydbClusterRestoreBackupSource) {
    this._restoreBackupSource.internalValue = value;
  }
  public resetRestoreBackupSource() {
    this._restoreBackupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreBackupSourceInput() {
    return this._restoreBackupSource.internalValue;
  }

  // restore_backupdr_backup_source - computed: false, optional: true, required: false
  private _restoreBackupdrBackupSource = new AlloydbClusterRestoreBackupdrBackupSourceOutputReference(this, "restore_backupdr_backup_source");
  public get restoreBackupdrBackupSource() {
    return this._restoreBackupdrBackupSource;
  }
  public putRestoreBackupdrBackupSource(value: AlloydbClusterRestoreBackupdrBackupSource) {
    this._restoreBackupdrBackupSource.internalValue = value;
  }
  public resetRestoreBackupdrBackupSource() {
    this._restoreBackupdrBackupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreBackupdrBackupSourceInput() {
    return this._restoreBackupdrBackupSource.internalValue;
  }

  // restore_backupdr_pitr_source - computed: false, optional: true, required: false
  private _restoreBackupdrPitrSource = new AlloydbClusterRestoreBackupdrPitrSourceOutputReference(this, "restore_backupdr_pitr_source");
  public get restoreBackupdrPitrSource() {
    return this._restoreBackupdrPitrSource;
  }
  public putRestoreBackupdrPitrSource(value: AlloydbClusterRestoreBackupdrPitrSource) {
    this._restoreBackupdrPitrSource.internalValue = value;
  }
  public resetRestoreBackupdrPitrSource() {
    this._restoreBackupdrPitrSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreBackupdrPitrSourceInput() {
    return this._restoreBackupdrPitrSource.internalValue;
  }

  // restore_continuous_backup_source - computed: false, optional: true, required: false
  private _restoreContinuousBackupSource = new AlloydbClusterRestoreContinuousBackupSourceOutputReference(this, "restore_continuous_backup_source");
  public get restoreContinuousBackupSource() {
    return this._restoreContinuousBackupSource;
  }
  public putRestoreContinuousBackupSource(value: AlloydbClusterRestoreContinuousBackupSource) {
    this._restoreContinuousBackupSource.internalValue = value;
  }
  public resetRestoreContinuousBackupSource() {
    this._restoreContinuousBackupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreContinuousBackupSourceInput() {
    return this._restoreContinuousBackupSource.internalValue;
  }

  // secondary_config - computed: false, optional: true, required: false
  private _secondaryConfig = new AlloydbClusterSecondaryConfigOutputReference(this, "secondary_config");
  public get secondaryConfig() {
    return this._secondaryConfig;
  }
  public putSecondaryConfig(value: AlloydbClusterSecondaryConfig) {
    this._secondaryConfig.internalValue = value;
  }
  public resetSecondaryConfig() {
    this._secondaryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryConfigInput() {
    return this._secondaryConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlloydbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlloydbClusterTimeouts) {
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
      annotations: cdktn.hashMapper(cdktn.stringToTerraform)(this._annotations),
      cluster_id: cdktn.stringToTerraform(this._clusterId),
      cluster_type: cdktn.stringToTerraform(this._clusterType),
      database_version: cdktn.stringToTerraform(this._databaseVersion),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
      display_name: cdktn.stringToTerraform(this._displayName),
      etag: cdktn.stringToTerraform(this._etag),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      skip_await_major_version_upgrade: cdktn.booleanToTerraform(this._skipAwaitMajorVersionUpgrade),
      subscription_type: cdktn.stringToTerraform(this._subscriptionType),
      automated_backup_policy: alloydbClusterAutomatedBackupPolicyToTerraform(this._automatedBackupPolicy.internalValue),
      continuous_backup_config: alloydbClusterContinuousBackupConfigToTerraform(this._continuousBackupConfig.internalValue),
      dataplex_config: alloydbClusterDataplexConfigToTerraform(this._dataplexConfig.internalValue),
      encryption_config: alloydbClusterEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
      initial_user: alloydbClusterInitialUserToTerraform(this._initialUser.internalValue),
      maintenance_update_policy: alloydbClusterMaintenanceUpdatePolicyToTerraform(this._maintenanceUpdatePolicy.internalValue),
      network_config: alloydbClusterNetworkConfigToTerraform(this._networkConfig.internalValue),
      psc_config: alloydbClusterPscConfigToTerraform(this._pscConfig.internalValue),
      restore_backup_source: alloydbClusterRestoreBackupSourceToTerraform(this._restoreBackupSource.internalValue),
      restore_backupdr_backup_source: alloydbClusterRestoreBackupdrBackupSourceToTerraform(this._restoreBackupdrBackupSource.internalValue),
      restore_backupdr_pitr_source: alloydbClusterRestoreBackupdrPitrSourceToTerraform(this._restoreBackupdrPitrSource.internalValue),
      restore_continuous_backup_source: alloydbClusterRestoreContinuousBackupSourceToTerraform(this._restoreContinuousBackupSource.internalValue),
      secondary_config: alloydbClusterSecondaryConfigToTerraform(this._secondaryConfig.internalValue),
      timeouts: alloydbClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cluster_id: {
        value: cdktn.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktn.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_version: {
        value: cdktn.stringToHclTerraform(this._databaseVersion),
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
      etag: {
        value: cdktn.stringToHclTerraform(this._etag),
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
      skip_await_major_version_upgrade: {
        value: cdktn.booleanToHclTerraform(this._skipAwaitMajorVersionUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_type: {
        value: cdktn.stringToHclTerraform(this._subscriptionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automated_backup_policy: {
        value: alloydbClusterAutomatedBackupPolicyToHclTerraform(this._automatedBackupPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterAutomatedBackupPolicyList",
      },
      continuous_backup_config: {
        value: alloydbClusterContinuousBackupConfigToHclTerraform(this._continuousBackupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterContinuousBackupConfigList",
      },
      dataplex_config: {
        value: alloydbClusterDataplexConfigToHclTerraform(this._dataplexConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterDataplexConfigList",
      },
      encryption_config: {
        value: alloydbClusterEncryptionConfigToHclTerraform(this._encryptionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterEncryptionConfigList",
      },
      initial_user: {
        value: alloydbClusterInitialUserToHclTerraform(this._initialUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterInitialUserList",
      },
      maintenance_update_policy: {
        value: alloydbClusterMaintenanceUpdatePolicyToHclTerraform(this._maintenanceUpdatePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterMaintenanceUpdatePolicyList",
      },
      network_config: {
        value: alloydbClusterNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterNetworkConfigList",
      },
      psc_config: {
        value: alloydbClusterPscConfigToHclTerraform(this._pscConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterPscConfigList",
      },
      restore_backup_source: {
        value: alloydbClusterRestoreBackupSourceToHclTerraform(this._restoreBackupSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterRestoreBackupSourceList",
      },
      restore_backupdr_backup_source: {
        value: alloydbClusterRestoreBackupdrBackupSourceToHclTerraform(this._restoreBackupdrBackupSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterRestoreBackupdrBackupSourceList",
      },
      restore_backupdr_pitr_source: {
        value: alloydbClusterRestoreBackupdrPitrSourceToHclTerraform(this._restoreBackupdrPitrSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterRestoreBackupdrPitrSourceList",
      },
      restore_continuous_backup_source: {
        value: alloydbClusterRestoreContinuousBackupSourceToHclTerraform(this._restoreContinuousBackupSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterRestoreContinuousBackupSourceList",
      },
      secondary_config: {
        value: alloydbClusterSecondaryConfigToHclTerraform(this._secondaryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbClusterSecondaryConfigList",
      },
      timeouts: {
        value: alloydbClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlloydbClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
