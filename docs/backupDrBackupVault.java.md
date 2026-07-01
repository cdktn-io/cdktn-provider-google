# `backupDrBackupVault` Submodule <a name="`backupDrBackupVault` Submodule" id="@cdktn/provider-google.backupDrBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrBackupVault <a name="BackupDrBackupVault" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault google_backup_dr_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_backup_vault.BackupDrBackupVault;

BackupDrBackupVault.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupMinimumEnforcedRetentionDuration(java.lang.String)
    .backupVaultId(java.lang.String)
    .location(java.lang.String)
//  .accessRestriction(java.lang.String)
//  .allowMissing(java.lang.Boolean|IResolvable)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .backupRetentionInheritance(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .effectiveTime(java.lang.String)
//  .encryptionConfig(BackupDrBackupVaultEncryptionConfig)
//  .forceDelete(java.lang.Boolean|IResolvable)
//  .forceUpdate(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .ignoreBackupPlanReferences(java.lang.Boolean|IResolvable)
//  .ignoreInactiveDatasources(java.lang.Boolean|IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(BackupDrBackupVaultTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.backupMinimumEnforcedRetentionDuration">backupMinimumEnforcedRetentionDuration</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | Required. ID of the requesting object. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The GCP location for the backup vault. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.accessRestriction">accessRestriction</a></code> | <code>java.lang.String</code> | Access restriction for the backup vault. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.allowMissing">allowMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.backupRetentionInheritance">backupRetentionInheritance</a></code> | <code>java.lang.String</code> | How a backup's enforced retention end time is inherited. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. The description of the BackupVault instance (2048 characters or less). |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.effectiveTime">effectiveTime</a></code> | <code>java.lang.String</code> | Optional. Time after which the BackupVault resource is locked. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig">BackupDrBackupVaultEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, allow update to extend the minimum enforced retention for backup vault. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.ignoreBackupPlanReferences">ignoreBackupPlanReferences</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.ignoreInactiveDatasources">ignoreInactiveDatasources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource labels to represent user provided metadata. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="backupMinimumEnforcedRetentionDuration" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.backupMinimumEnforcedRetentionDuration"></a>

- *Type:* java.lang.String

Required.

The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#backup_minimum_enforced_retention_duration BackupDrBackupVault#backup_minimum_enforced_retention_duration}

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.backupVaultId"></a>

- *Type:* java.lang.String

Required. ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#backup_vault_id BackupDrBackupVault#backup_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The GCP location for the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#location BackupDrBackupVault#location}

---

##### `accessRestriction`<sup>Optional</sup> <a name="accessRestriction" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.accessRestriction"></a>

- *Type:* java.lang.String

Access restriction for the backup vault.

Default value is 'WITHIN_ORGANIZATION' if not provided during creation. Default value: "WITHIN_ORGANIZATION" Possible values: ["ACCESS_RESTRICTION_UNSPECIFIED", "WITHIN_PROJECT", "WITHIN_ORGANIZATION", "UNRESTRICTED", "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#access_restriction BackupDrBackupVault#access_restriction}

---

##### `allowMissing`<sup>Optional</sup> <a name="allowMissing" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.allowMissing"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#allow_missing BackupDrBackupVault#allow_missing}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#annotations BackupDrBackupVault#annotations}

---

##### `backupRetentionInheritance`<sup>Optional</sup> <a name="backupRetentionInheritance" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.backupRetentionInheritance"></a>

- *Type:* java.lang.String

How a backup's enforced retention end time is inherited.

Default value is 'INHERIT_VAULT_RETENTION' if not provided during creation. Possible values: ["BACKUP_RETENTION_INHERITANCE_UNSPECIFIED", "INHERIT_VAULT_RETENTION", "MATCH_BACKUP_EXPIRE_TIME"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#backup_retention_inheritance BackupDrBackupVault#backup_retention_inheritance}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#deletion_policy BackupDrBackupVault#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. The description of the BackupVault instance (2048 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#description BackupDrBackupVault#description}

---

##### `effectiveTime`<sup>Optional</sup> <a name="effectiveTime" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.effectiveTime"></a>

- *Type:* java.lang.String

Optional. Time after which the BackupVault resource is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#effective_time BackupDrBackupVault#effective_time}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig">BackupDrBackupVaultEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#encryption_config BackupDrBackupVault#encryption_config}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

* deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#force_delete BackupDrBackupVault#force_delete}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.forceUpdate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, allow update to extend the minimum enforced retention for backup vault.

This overrides
the restriction against conflicting retention periods. This conflict may occur when the
expiration schedule defined by the associated backup plan is shorter than the minimum
retention set by the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#force_update BackupDrBackupVault#force_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreBackupPlanReferences`<sup>Optional</sup> <a name="ignoreBackupPlanReferences" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.ignoreBackupPlanReferences"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#ignore_backup_plan_references BackupDrBackupVault#ignore_backup_plan_references}

---

##### `ignoreInactiveDatasources`<sup>Optional</sup> <a name="ignoreInactiveDatasources" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.ignoreInactiveDatasources"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#ignore_inactive_datasources BackupDrBackupVault#ignore_inactive_datasources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#labels BackupDrBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#timeouts BackupDrBackupVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAccessRestriction">resetAccessRestriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAllowMissing">resetAllowMissing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetBackupRetentionInheritance">resetBackupRetentionInheritance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetEffectiveTime">resetEffectiveTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreBackupPlanReferences">resetIgnoreBackupPlanReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreInactiveDatasources">resetIgnoreInactiveDatasources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(BackupDrBackupVaultEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig">BackupDrBackupVaultEncryptionConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts"></a>

```java
public void putTimeouts(BackupDrBackupVaultTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

---

##### `resetAccessRestriction` <a name="resetAccessRestriction" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAccessRestriction"></a>

```java
public void resetAccessRestriction()
```

##### `resetAllowMissing` <a name="resetAllowMissing" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAllowMissing"></a>

```java
public void resetAllowMissing()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetBackupRetentionInheritance` <a name="resetBackupRetentionInheritance" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetBackupRetentionInheritance"></a>

```java
public void resetBackupRetentionInheritance()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEffectiveTime` <a name="resetEffectiveTime" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetEffectiveTime"></a>

```java
public void resetEffectiveTime()
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceUpdate"></a>

```java
public void resetForceUpdate()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreBackupPlanReferences` <a name="resetIgnoreBackupPlanReferences" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreBackupPlanReferences"></a>

```java
public void resetIgnoreBackupPlanReferences()
```

##### `resetIgnoreInactiveDatasources` <a name="resetIgnoreInactiveDatasources" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreInactiveDatasources"></a>

```java
public void resetIgnoreInactiveDatasources()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupDrBackupVault resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct"></a>

```java
import io.cdktn.providers.google.backup_dr_backup_vault.BackupDrBackupVault;

BackupDrBackupVault.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement"></a>

```java
import io.cdktn.providers.google.backup_dr_backup_vault.BackupDrBackupVault;

BackupDrBackupVault.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource"></a>

```java
import io.cdktn.providers.google.backup_dr_backup_vault.BackupDrBackupVault;

BackupDrBackupVault.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.backup_dr_backup_vault.BackupDrBackupVault;

BackupDrBackupVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BackupDrBackupVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BackupDrBackupVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BackupDrBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BackupDrBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BackupDrBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupCount">backupCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletable">deletable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference">BackupDrBackupVaultEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference">BackupDrBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.totalStoredBytes">totalStoredBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestrictionInput">accessRestrictionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissingInput">allowMissingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput">backupMinimumEnforcedRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupRetentionInheritanceInput">backupRetentionInheritanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultIdInput">backupVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTimeInput">effectiveTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig">BackupDrBackupVaultEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdateInput">forceUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferencesInput">ignoreBackupPlanReferencesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasourcesInput">ignoreInactiveDatasourcesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestriction">accessRestriction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissing">allowMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration">backupMinimumEnforcedRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupRetentionInheritance">backupRetentionInheritance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTime">effectiveTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferences">ignoreBackupPlanReferences</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasources">ignoreInactiveDatasources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupCount`<sup>Required</sup> <a name="backupCount" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupCount"></a>

```java
public java.lang.String getBackupCount();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deletable`<sup>Required</sup> <a name="deletable" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletable"></a>

```java
public IResolvable getDeletable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.encryptionConfig"></a>

```java
public BackupDrBackupVaultEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference">BackupDrBackupVaultEncryptionConfigOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeouts"></a>

```java
public BackupDrBackupVaultTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference">BackupDrBackupVaultTimeoutsOutputReference</a>

---

##### `totalStoredBytes`<sup>Required</sup> <a name="totalStoredBytes" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.totalStoredBytes"></a>

```java
public java.lang.String getTotalStoredBytes();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `accessRestrictionInput`<sup>Optional</sup> <a name="accessRestrictionInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestrictionInput"></a>

```java
public java.lang.String getAccessRestrictionInput();
```

- *Type:* java.lang.String

---

##### `allowMissingInput`<sup>Optional</sup> <a name="allowMissingInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissingInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowMissingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `backupMinimumEnforcedRetentionDurationInput`<sup>Optional</sup> <a name="backupMinimumEnforcedRetentionDurationInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput"></a>

```java
public java.lang.String getBackupMinimumEnforcedRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `backupRetentionInheritanceInput`<sup>Optional</sup> <a name="backupRetentionInheritanceInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupRetentionInheritanceInput"></a>

```java
public java.lang.String getBackupRetentionInheritanceInput();
```

- *Type:* java.lang.String

---

##### `backupVaultIdInput`<sup>Optional</sup> <a name="backupVaultIdInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultIdInput"></a>

```java
public java.lang.String getBackupVaultIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `effectiveTimeInput`<sup>Optional</sup> <a name="effectiveTimeInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTimeInput"></a>

```java
public java.lang.String getEffectiveTimeInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.encryptionConfigInput"></a>

```java
public BackupDrBackupVaultEncryptionConfig getEncryptionConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig">BackupDrBackupVaultEncryptionConfig</a>

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getForceDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreBackupPlanReferencesInput`<sup>Optional</sup> <a name="ignoreBackupPlanReferencesInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferencesInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreBackupPlanReferencesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreInactiveDatasourcesInput`<sup>Optional</sup> <a name="ignoreInactiveDatasourcesInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasourcesInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreInactiveDatasourcesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeoutsInput"></a>

```java
public IResolvable|BackupDrBackupVaultTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

---

##### `accessRestriction`<sup>Required</sup> <a name="accessRestriction" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestriction"></a>

```java
public java.lang.String getAccessRestriction();
```

- *Type:* java.lang.String

---

##### `allowMissing`<sup>Required</sup> <a name="allowMissing" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissing"></a>

```java
public java.lang.Boolean|IResolvable getAllowMissing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `backupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="backupMinimumEnforcedRetentionDuration" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration"></a>

```java
public java.lang.String getBackupMinimumEnforcedRetentionDuration();
```

- *Type:* java.lang.String

---

##### `backupRetentionInheritance`<sup>Required</sup> <a name="backupRetentionInheritance" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupRetentionInheritance"></a>

```java
public java.lang.String getBackupRetentionInheritance();
```

- *Type:* java.lang.String

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultId"></a>

```java
public java.lang.String getBackupVaultId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTime"></a>

```java
public java.lang.String getEffectiveTime();
```

- *Type:* java.lang.String

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDelete"></a>

```java
public java.lang.Boolean|IResolvable getForceDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdate"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreBackupPlanReferences`<sup>Required</sup> <a name="ignoreBackupPlanReferences" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferences"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreBackupPlanReferences();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreInactiveDatasources`<sup>Required</sup> <a name="ignoreInactiveDatasources" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasources"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreInactiveDatasources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVault.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrBackupVaultConfig <a name="BackupDrBackupVaultConfig" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_backup_vault.BackupDrBackupVaultConfig;

BackupDrBackupVaultConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupMinimumEnforcedRetentionDuration(java.lang.String)
    .backupVaultId(java.lang.String)
    .location(java.lang.String)
//  .accessRestriction(java.lang.String)
//  .allowMissing(java.lang.Boolean|IResolvable)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .backupRetentionInheritance(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .effectiveTime(java.lang.String)
//  .encryptionConfig(BackupDrBackupVaultEncryptionConfig)
//  .forceDelete(java.lang.Boolean|IResolvable)
//  .forceUpdate(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .ignoreBackupPlanReferences(java.lang.Boolean|IResolvable)
//  .ignoreInactiveDatasources(java.lang.Boolean|IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(BackupDrBackupVaultTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration">backupMinimumEnforcedRetentionDuration</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | Required. ID of the requesting object. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.location">location</a></code> | <code>java.lang.String</code> | The GCP location for the backup vault. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.accessRestriction">accessRestriction</a></code> | <code>java.lang.String</code> | Access restriction for the backup vault. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.allowMissing">allowMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupRetentionInheritance">backupRetentionInheritance</a></code> | <code>java.lang.String</code> | How a backup's enforced retention end time is inherited. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. The description of the BackupVault instance (2048 characters or less). |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.effectiveTime">effectiveTime</a></code> | <code>java.lang.String</code> | Optional. Time after which the BackupVault resource is locked. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig">BackupDrBackupVaultEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, allow update to extend the minimum enforced retention for backup vault. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreBackupPlanReferences">ignoreBackupPlanReferences</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreInactiveDatasources">ignoreInactiveDatasources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource labels to represent user provided metadata. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="backupMinimumEnforcedRetentionDuration" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration"></a>

```java
public java.lang.String getBackupMinimumEnforcedRetentionDuration();
```

- *Type:* java.lang.String

Required.

The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#backup_minimum_enforced_retention_duration BackupDrBackupVault#backup_minimum_enforced_retention_duration}

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupVaultId"></a>

```java
public java.lang.String getBackupVaultId();
```

- *Type:* java.lang.String

Required. ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#backup_vault_id BackupDrBackupVault#backup_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The GCP location for the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#location BackupDrBackupVault#location}

---

##### `accessRestriction`<sup>Optional</sup> <a name="accessRestriction" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.accessRestriction"></a>

```java
public java.lang.String getAccessRestriction();
```

- *Type:* java.lang.String

Access restriction for the backup vault.

Default value is 'WITHIN_ORGANIZATION' if not provided during creation. Default value: "WITHIN_ORGANIZATION" Possible values: ["ACCESS_RESTRICTION_UNSPECIFIED", "WITHIN_PROJECT", "WITHIN_ORGANIZATION", "UNRESTRICTED", "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#access_restriction BackupDrBackupVault#access_restriction}

---

##### `allowMissing`<sup>Optional</sup> <a name="allowMissing" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.allowMissing"></a>

```java
public java.lang.Boolean|IResolvable getAllowMissing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#allow_missing BackupDrBackupVault#allow_missing}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#annotations BackupDrBackupVault#annotations}

---

##### `backupRetentionInheritance`<sup>Optional</sup> <a name="backupRetentionInheritance" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupRetentionInheritance"></a>

```java
public java.lang.String getBackupRetentionInheritance();
```

- *Type:* java.lang.String

How a backup's enforced retention end time is inherited.

Default value is 'INHERIT_VAULT_RETENTION' if not provided during creation. Possible values: ["BACKUP_RETENTION_INHERITANCE_UNSPECIFIED", "INHERIT_VAULT_RETENTION", "MATCH_BACKUP_EXPIRE_TIME"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#backup_retention_inheritance BackupDrBackupVault#backup_retention_inheritance}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#deletion_policy BackupDrBackupVault#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. The description of the BackupVault instance (2048 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#description BackupDrBackupVault#description}

---

##### `effectiveTime`<sup>Optional</sup> <a name="effectiveTime" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.effectiveTime"></a>

```java
public java.lang.String getEffectiveTime();
```

- *Type:* java.lang.String

Optional. Time after which the BackupVault resource is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#effective_time BackupDrBackupVault#effective_time}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.encryptionConfig"></a>

```java
public BackupDrBackupVaultEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig">BackupDrBackupVaultEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#encryption_config BackupDrBackupVault#encryption_config}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceDelete"></a>

```java
public java.lang.Boolean|IResolvable getForceDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

* deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#force_delete BackupDrBackupVault#force_delete}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceUpdate"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, allow update to extend the minimum enforced retention for backup vault.

This overrides
the restriction against conflicting retention periods. This conflict may occur when the
expiration schedule defined by the associated backup plan is shorter than the minimum
retention set by the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#force_update BackupDrBackupVault#force_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreBackupPlanReferences`<sup>Optional</sup> <a name="ignoreBackupPlanReferences" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreBackupPlanReferences"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreBackupPlanReferences();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#ignore_backup_plan_references BackupDrBackupVault#ignore_backup_plan_references}

---

##### `ignoreInactiveDatasources`<sup>Optional</sup> <a name="ignoreInactiveDatasources" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreInactiveDatasources"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreInactiveDatasources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#ignore_inactive_datasources BackupDrBackupVault#ignore_inactive_datasources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#labels BackupDrBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.timeouts"></a>

```java
public BackupDrBackupVaultTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#timeouts BackupDrBackupVault#timeouts}

---

### BackupDrBackupVaultEncryptionConfig <a name="BackupDrBackupVaultEncryptionConfig" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_backup_vault.BackupDrBackupVaultEncryptionConfig;

BackupDrBackupVaultEncryptionConfig.builder()
//  .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The Resource name of the Cloud KMS key to be used to encrypt new backups. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The Resource name of the Cloud KMS key to be used to encrypt new backups.

The key must be in the same location as the backup vault. The key must be a Cloud KMS CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#kms_key_name BackupDrBackupVault#kms_key_name}

---

### BackupDrBackupVaultTimeouts <a name="BackupDrBackupVaultTimeouts" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_backup_vault.BackupDrBackupVaultTimeouts;

BackupDrBackupVaultTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#create BackupDrBackupVault#create}. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#delete BackupDrBackupVault#delete}. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#update BackupDrBackupVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#create BackupDrBackupVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#delete BackupDrBackupVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/backup_dr_backup_vault#update BackupDrBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrBackupVaultEncryptionConfigOutputReference <a name="BackupDrBackupVaultEncryptionConfigOutputReference" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_backup_vault.BackupDrBackupVaultEncryptionConfigOutputReference;

new BackupDrBackupVaultEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig">BackupDrBackupVaultEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfigOutputReference.property.internalValue"></a>

```java
public BackupDrBackupVaultEncryptionConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultEncryptionConfig">BackupDrBackupVaultEncryptionConfig</a>

---


### BackupDrBackupVaultTimeoutsOutputReference <a name="BackupDrBackupVaultTimeoutsOutputReference" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.backup_dr_backup_vault.BackupDrBackupVaultTimeoutsOutputReference;

new BackupDrBackupVaultTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupDrBackupVaultTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

---



