/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BackupDrBackupVaultConfig extends cdktn.TerraformMetaArguments {
  /**
  * Access restriction for the backup vault. Default value is 'WITHIN_ORGANIZATION' if not provided during creation. Default value: "WITHIN_ORGANIZATION" Possible values: ["ACCESS_RESTRICTION_UNSPECIFIED", "WITHIN_PROJECT", "WITHIN_ORGANIZATION", "UNRESTRICTED", "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#access_restriction BackupDrBackupVault#access_restriction}
  */
  readonly accessRestriction?: string;
  /**
  * Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#allow_missing BackupDrBackupVault#allow_missing}
  */
  readonly allowMissing?: boolean | cdktn.IResolvable;
  /**
  * Optional. User annotations. See https://google.aip.dev/128#annotations
  * Stores small amounts of arbitrary data. 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#annotations BackupDrBackupVault#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Required. The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#backup_minimum_enforced_retention_duration BackupDrBackupVault#backup_minimum_enforced_retention_duration}
  */
  readonly backupMinimumEnforcedRetentionDuration: string;
  /**
  * How a backup's enforced retention end time is inherited. Default value is 'INHERIT_VAULT_RETENTION' if not provided during creation. Possible values: ["BACKUP_RETENTION_INHERITANCE_UNSPECIFIED", "INHERIT_VAULT_RETENTION", "MATCH_BACKUP_EXPIRE_TIME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#backup_retention_inheritance BackupDrBackupVault#backup_retention_inheritance}
  */
  readonly backupRetentionInheritance?: string;
  /**
  * Required. ID of the requesting object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#backup_vault_id BackupDrBackupVault#backup_vault_id}
  */
  readonly backupVaultId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#deletion_policy BackupDrBackupVault#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. The description of the BackupVault instance (2048 characters or less).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#description BackupDrBackupVault#description}
  */
  readonly description?: string;
  /**
  * Optional. Time after which the BackupVault resource is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#effective_time BackupDrBackupVault#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * If set, the following restrictions against deletion of the backup vault instance can be overridden:
  *    * deletion of a backup vault instance containing no backups, but still containing empty datasources.
  *    * deletion of a backup vault instance that is being referenced by an active backup plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#force_delete BackupDrBackupVault#force_delete}
  */
  readonly forceDelete?: boolean | cdktn.IResolvable;
  /**
  * If set, allow update to extend the minimum enforced retention for backup vault. This overrides
  *  the restriction against conflicting retention periods. This conflict may occur when the
  *  expiration schedule defined by the associated backup plan is shorter than the minimum
  *  retention set by the backup vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#force_update BackupDrBackupVault#force_update}
  */
  readonly forceUpdate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If set, the following restrictions against deletion of the backup vault instance can be overridden:
  *    * deletion of a backup vault instance that is being referenced by an active backup plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#ignore_backup_plan_references BackupDrBackupVault#ignore_backup_plan_references}
  */
  readonly ignoreBackupPlanReferences?: boolean | cdktn.IResolvable;
  /**
  * If set, the following restrictions against deletion of the backup vault instance can be overridden:
  *    * deletion of a backup vault instance containing no backups, but still containing empty datasources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#ignore_inactive_datasources BackupDrBackupVault#ignore_inactive_datasources}
  */
  readonly ignoreInactiveDatasources?: boolean | cdktn.IResolvable;
  /**
  * Optional. Resource labels to represent user provided metadata. 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#labels BackupDrBackupVault#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The GCP location for the backup vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#location BackupDrBackupVault#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}
  */
  readonly project?: string;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#encryption_config BackupDrBackupVault#encryption_config}
  */
  readonly encryptionConfig?: BackupDrBackupVaultEncryptionConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#timeouts BackupDrBackupVault#timeouts}
  */
  readonly timeouts?: BackupDrBackupVaultTimeouts;
}
export interface BackupDrBackupVaultEncryptionConfig {
  /**
  * The Resource name of the Cloud KMS key to be used to encrypt new backups. The key must be in the same location as the backup vault. The key must be a Cloud KMS CryptoKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#kms_key_name BackupDrBackupVault#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function backupDrBackupVaultEncryptionConfigToTerraform(struct?: BackupDrBackupVaultEncryptionConfigOutputReference | BackupDrBackupVaultEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function backupDrBackupVaultEncryptionConfigToHclTerraform(struct?: BackupDrBackupVaultEncryptionConfigOutputReference | BackupDrBackupVaultEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class BackupDrBackupVaultEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrBackupVaultEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrBackupVaultEncryptionConfig | undefined) {
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
export interface BackupDrBackupVaultTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#create BackupDrBackupVault#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#delete BackupDrBackupVault#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#update BackupDrBackupVault#update}
  */
  readonly update?: string;
}

export function backupDrBackupVaultTimeoutsToTerraform(struct?: BackupDrBackupVaultTimeouts | cdktn.IResolvable): any {
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


export function backupDrBackupVaultTimeoutsToHclTerraform(struct?: BackupDrBackupVaultTimeouts | cdktn.IResolvable): any {
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

export class BackupDrBackupVaultTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupDrBackupVaultTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BackupDrBackupVaultTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault google_backup_dr_backup_vault}
*/
export class BackupDrBackupVault extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_backup_dr_backup_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BackupDrBackupVault resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupDrBackupVault to import
  * @param importFromId The id of the existing BackupDrBackupVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupDrBackupVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_backup_dr_backup_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/backup_dr_backup_vault google_backup_dr_backup_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupDrBackupVaultConfig
  */
  public constructor(scope: Construct, id: string, config: BackupDrBackupVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'google_backup_dr_backup_vault',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.40.0',
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
    this._accessRestriction = config.accessRestriction;
    this._allowMissing = config.allowMissing;
    this._annotations = config.annotations;
    this._backupMinimumEnforcedRetentionDuration = config.backupMinimumEnforcedRetentionDuration;
    this._backupRetentionInheritance = config.backupRetentionInheritance;
    this._backupVaultId = config.backupVaultId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._effectiveTime = config.effectiveTime;
    this._forceDelete = config.forceDelete;
    this._forceUpdate = config.forceUpdate;
    this._id = config.id;
    this._ignoreBackupPlanReferences = config.ignoreBackupPlanReferences;
    this._ignoreInactiveDatasources = config.ignoreInactiveDatasources;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._encryptionConfig.internalValue = config.encryptionConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_restriction - computed: false, optional: true, required: false
  private _accessRestriction?: string; 
  public get accessRestriction() {
    return this.getStringAttribute('access_restriction');
  }
  public set accessRestriction(value: string) {
    this._accessRestriction = value;
  }
  public resetAccessRestriction() {
    this._accessRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRestrictionInput() {
    return this._accessRestriction;
  }

  // allow_missing - computed: false, optional: true, required: false
  private _allowMissing?: boolean | cdktn.IResolvable; 
  public get allowMissing() {
    return this.getBooleanAttribute('allow_missing');
  }
  public set allowMissing(value: boolean | cdktn.IResolvable) {
    this._allowMissing = value;
  }
  public resetAllowMissing() {
    this._allowMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMissingInput() {
    return this._allowMissing;
  }

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

  // backup_count - computed: true, optional: false, required: false
  public get backupCount() {
    return this.getStringAttribute('backup_count');
  }

  // backup_minimum_enforced_retention_duration - computed: false, optional: false, required: true
  private _backupMinimumEnforcedRetentionDuration?: string; 
  public get backupMinimumEnforcedRetentionDuration() {
    return this.getStringAttribute('backup_minimum_enforced_retention_duration');
  }
  public set backupMinimumEnforcedRetentionDuration(value: string) {
    this._backupMinimumEnforcedRetentionDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMinimumEnforcedRetentionDurationInput() {
    return this._backupMinimumEnforcedRetentionDuration;
  }

  // backup_retention_inheritance - computed: false, optional: true, required: false
  private _backupRetentionInheritance?: string; 
  public get backupRetentionInheritance() {
    return this.getStringAttribute('backup_retention_inheritance');
  }
  public set backupRetentionInheritance(value: string) {
    this._backupRetentionInheritance = value;
  }
  public resetBackupRetentionInheritance() {
    this._backupRetentionInheritance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionInheritanceInput() {
    return this._backupRetentionInheritance;
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

  // description - computed: false, optional: true, required: false
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

  // effective_time - computed: false, optional: true, required: false
  private _effectiveTime?: string; 
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }
  public set effectiveTime(value: string) {
    this._effectiveTime = value;
  }
  public resetEffectiveTime() {
    this._effectiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTimeInput() {
    return this._effectiveTime;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktn.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktn.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktn.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktn.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
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

  // ignore_backup_plan_references - computed: false, optional: true, required: false
  private _ignoreBackupPlanReferences?: boolean | cdktn.IResolvable; 
  public get ignoreBackupPlanReferences() {
    return this.getBooleanAttribute('ignore_backup_plan_references');
  }
  public set ignoreBackupPlanReferences(value: boolean | cdktn.IResolvable) {
    this._ignoreBackupPlanReferences = value;
  }
  public resetIgnoreBackupPlanReferences() {
    this._ignoreBackupPlanReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreBackupPlanReferencesInput() {
    return this._ignoreBackupPlanReferences;
  }

  // ignore_inactive_datasources - computed: false, optional: true, required: false
  private _ignoreInactiveDatasources?: boolean | cdktn.IResolvable; 
  public get ignoreInactiveDatasources() {
    return this.getBooleanAttribute('ignore_inactive_datasources');
  }
  public set ignoreInactiveDatasources(value: boolean | cdktn.IResolvable) {
    this._ignoreInactiveDatasources = value;
  }
  public resetIgnoreInactiveDatasources() {
    this._ignoreInactiveDatasources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInactiveDatasourcesInput() {
    return this._ignoreInactiveDatasources;
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

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new BackupDrBackupVaultEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: BackupDrBackupVaultEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackupDrBackupVaultTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackupDrBackupVaultTimeouts) {
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
      access_restriction: cdktn.stringToTerraform(this._accessRestriction),
      allow_missing: cdktn.booleanToTerraform(this._allowMissing),
      annotations: cdktn.hashMapper(cdktn.stringToTerraform)(this._annotations),
      backup_minimum_enforced_retention_duration: cdktn.stringToTerraform(this._backupMinimumEnforcedRetentionDuration),
      backup_retention_inheritance: cdktn.stringToTerraform(this._backupRetentionInheritance),
      backup_vault_id: cdktn.stringToTerraform(this._backupVaultId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      effective_time: cdktn.stringToTerraform(this._effectiveTime),
      force_delete: cdktn.booleanToTerraform(this._forceDelete),
      force_update: cdktn.booleanToTerraform(this._forceUpdate),
      id: cdktn.stringToTerraform(this._id),
      ignore_backup_plan_references: cdktn.booleanToTerraform(this._ignoreBackupPlanReferences),
      ignore_inactive_datasources: cdktn.booleanToTerraform(this._ignoreInactiveDatasources),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      encryption_config: backupDrBackupVaultEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
      timeouts: backupDrBackupVaultTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_restriction: {
        value: cdktn.stringToHclTerraform(this._accessRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_missing: {
        value: cdktn.booleanToHclTerraform(this._allowMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      backup_minimum_enforced_retention_duration: {
        value: cdktn.stringToHclTerraform(this._backupMinimumEnforcedRetentionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_retention_inheritance: {
        value: cdktn.stringToHclTerraform(this._backupRetentionInheritance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_vault_id: {
        value: cdktn.stringToHclTerraform(this._backupVaultId),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_time: {
        value: cdktn.stringToHclTerraform(this._effectiveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktn.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_update: {
        value: cdktn.booleanToHclTerraform(this._forceUpdate),
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
      ignore_backup_plan_references: {
        value: cdktn.booleanToHclTerraform(this._ignoreBackupPlanReferences),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_inactive_datasources: {
        value: cdktn.booleanToHclTerraform(this._ignoreInactiveDatasources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      encryption_config: {
        value: backupDrBackupVaultEncryptionConfigToHclTerraform(this._encryptionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupDrBackupVaultEncryptionConfigList",
      },
      timeouts: {
        value: backupDrBackupVaultTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupDrBackupVaultTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
