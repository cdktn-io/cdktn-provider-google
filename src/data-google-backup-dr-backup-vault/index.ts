/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/backup_dr_backup_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleBackupDrBackupVaultConfig extends cdktn.TerraformMetaArguments {
  /**
  * Required. ID of the requesting object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/backup_dr_backup_vault#backup_vault_id DataGoogleBackupDrBackupVault#backup_vault_id}
  */
  readonly backupVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/backup_dr_backup_vault#id DataGoogleBackupDrBackupVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GCP location for the backup vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/backup_dr_backup_vault#location DataGoogleBackupDrBackupVault#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/backup_dr_backup_vault#project DataGoogleBackupDrBackupVault#project}
  */
  readonly project?: string;
}
export interface DataGoogleBackupDrBackupVaultEncryptionConfig {
}

export function dataGoogleBackupDrBackupVaultEncryptionConfigToTerraform(struct?: DataGoogleBackupDrBackupVaultEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleBackupDrBackupVaultEncryptionConfigToHclTerraform(struct?: DataGoogleBackupDrBackupVaultEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleBackupDrBackupVaultEncryptionConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleBackupDrBackupVaultEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleBackupDrBackupVaultEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_name - computed: true, optional: false, required: false
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
}

export class DataGoogleBackupDrBackupVaultEncryptionConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleBackupDrBackupVaultEncryptionConfigOutputReference {
    return new DataGoogleBackupDrBackupVaultEncryptionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/backup_dr_backup_vault google_backup_dr_backup_vault}
*/
export class DataGoogleBackupDrBackupVault extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_backup_dr_backup_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleBackupDrBackupVault resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleBackupDrBackupVault to import
  * @param importFromId The id of the existing DataGoogleBackupDrBackupVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/backup_dr_backup_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleBackupDrBackupVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_backup_dr_backup_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/backup_dr_backup_vault google_backup_dr_backup_vault} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleBackupDrBackupVaultConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleBackupDrBackupVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'google_backup_dr_backup_vault',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.36.0',
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
    this._backupVaultId = config.backupVaultId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_restriction - computed: true, optional: false, required: false
  public get accessRestriction() {
    return this.getStringAttribute('access_restriction');
  }

  // allow_missing - computed: true, optional: false, required: false
  public get allowMissing() {
    return this.getBooleanAttribute('allow_missing');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktn.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // backup_count - computed: true, optional: false, required: false
  public get backupCount() {
    return this.getStringAttribute('backup_count');
  }

  // backup_minimum_enforced_retention_duration - computed: true, optional: false, required: false
  public get backupMinimumEnforcedRetentionDuration() {
    return this.getStringAttribute('backup_minimum_enforced_retention_duration');
  }

  // backup_retention_inheritance - computed: true, optional: false, required: false
  public get backupRetentionInheritance() {
    return this.getStringAttribute('backup_retention_inheritance');
  }

  // backup_vault_id - computed: false, optional: false, required: true
  private _backupVaultId?: string; 
  public get backupVaultId() {
    return this.getStringAttribute('backup_vault_id');
  }
  public set backupVaultId(value: string) {
    this._backupVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultIdInput() {
    return this._backupVaultId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletable - computed: true, optional: false, required: false
  public get deletable() {
    return this.getBooleanAttribute('deletable');
  }

  // deletion_policy - computed: true, optional: false, required: false
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // effective_time - computed: true, optional: false, required: false
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }

  // encryption_config - computed: true, optional: false, required: false
  private _encryptionConfig = new DataGoogleBackupDrBackupVaultEncryptionConfigList(this, "encryption_config", false);
  public get encryptionConfig() {
    return this._encryptionConfig;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // force_delete - computed: true, optional: false, required: false
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }

  // force_update - computed: true, optional: false, required: false
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
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

  // ignore_backup_plan_references - computed: true, optional: false, required: false
  public get ignoreBackupPlanReferences() {
    return this.getBooleanAttribute('ignore_backup_plan_references');
  }

  // ignore_inactive_datasources - computed: true, optional: false, required: false
  public get ignoreInactiveDatasources() {
    return this.getBooleanAttribute('ignore_inactive_datasources');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktn.StringMap(this, "labels");
  public get labels() {
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

  // project - computed: false, optional: true, required: false
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

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // total_stored_bytes - computed: true, optional: false, required: false
  public get totalStoredBytes() {
    return this.getStringAttribute('total_stored_bytes');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_vault_id: cdktn.stringToTerraform(this._backupVaultId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_vault_id: {
        value: cdktn.stringToHclTerraform(this._backupVaultId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
