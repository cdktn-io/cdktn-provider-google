# `migrationCenterImportJob` Submodule <a name="`migrationCenterImportJob` Submodule" id="@cdktn/provider-google.migrationCenterImportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterImportJob <a name="MigrationCenterImportJob" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job google_migration_center_import_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJob;

MigrationCenterImportJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assetSource(java.lang.String)
    .importJobId(java.lang.String)
    .location(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(MigrationCenterImportJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.assetSource">assetSource</a></code> | <code>java.lang.String</code> | Reference to a source. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.importJobId">importJobId</a></code> | <code>java.lang.String</code> | ID of the import job. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-friendly display name. Maximum length is 256 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#id MigrationCenterImportJob#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#project MigrationCenterImportJob#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetSource`<sup>Required</sup> <a name="assetSource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.assetSource"></a>

- *Type:* java.lang.String

Reference to a source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#asset_source MigrationCenterImportJob#asset_source}

---

##### `importJobId`<sup>Required</sup> <a name="importJobId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.importJobId"></a>

- *Type:* java.lang.String

ID of the import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#import_job_id MigrationCenterImportJob#import_job_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#location MigrationCenterImportJob#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#deletion_policy MigrationCenterImportJob#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-friendly display name. Maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#display_name MigrationCenterImportJob#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#id MigrationCenterImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#labels MigrationCenterImportJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#project MigrationCenterImportJob#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#timeouts MigrationCenterImportJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.putTimeouts"></a>

```java
public void putTimeouts(MigrationCenterImportJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MigrationCenterImportJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isConstruct"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJob;

MigrationCenterImportJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformElement"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJob;

MigrationCenterImportJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformResource"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJob;

MigrationCenterImportJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJob;

MigrationCenterImportJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MigrationCenterImportJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MigrationCenterImportJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MigrationCenterImportJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MigrationCenterImportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterImportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.completeTime">completeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.executionReport">executionReport</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList">MigrationCenterImportJobExecutionReportList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference">MigrationCenterImportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.validationReport">validationReport</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList">MigrationCenterImportJobValidationReportList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.assetSourceInput">assetSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.importJobIdInput">importJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.assetSource">assetSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.importJobId">importJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `completeTime`<sup>Required</sup> <a name="completeTime" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.completeTime"></a>

```java
public java.lang.String getCompleteTime();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `executionReport`<sup>Required</sup> <a name="executionReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.executionReport"></a>

```java
public MigrationCenterImportJobExecutionReportList getExecutionReport();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList">MigrationCenterImportJobExecutionReportList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.timeouts"></a>

```java
public MigrationCenterImportJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference">MigrationCenterImportJobTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `validationReport`<sup>Required</sup> <a name="validationReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.validationReport"></a>

```java
public MigrationCenterImportJobValidationReportList getValidationReport();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList">MigrationCenterImportJobValidationReportList</a>

---

##### `assetSourceInput`<sup>Optional</sup> <a name="assetSourceInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.assetSourceInput"></a>

```java
public java.lang.String getAssetSourceInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importJobIdInput`<sup>Optional</sup> <a name="importJobIdInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.importJobIdInput"></a>

```java
public java.lang.String getImportJobIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.timeoutsInput"></a>

```java
public IResolvable|MigrationCenterImportJobTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a>

---

##### `assetSource`<sup>Required</sup> <a name="assetSource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.assetSource"></a>

```java
public java.lang.String getAssetSource();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importJobId`<sup>Required</sup> <a name="importJobId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.importJobId"></a>

```java
public java.lang.String getImportJobId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterImportJobConfig <a name="MigrationCenterImportJobConfig" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobConfig;

MigrationCenterImportJobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assetSource(java.lang.String)
    .importJobId(java.lang.String)
    .location(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(MigrationCenterImportJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.assetSource">assetSource</a></code> | <code>java.lang.String</code> | Reference to a source. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.importJobId">importJobId</a></code> | <code>java.lang.String</code> | ID of the import job. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-friendly display name. Maximum length is 256 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#id MigrationCenterImportJob#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#project MigrationCenterImportJob#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetSource`<sup>Required</sup> <a name="assetSource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.assetSource"></a>

```java
public java.lang.String getAssetSource();
```

- *Type:* java.lang.String

Reference to a source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#asset_source MigrationCenterImportJob#asset_source}

---

##### `importJobId`<sup>Required</sup> <a name="importJobId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.importJobId"></a>

```java
public java.lang.String getImportJobId();
```

- *Type:* java.lang.String

ID of the import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#import_job_id MigrationCenterImportJob#import_job_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#location MigrationCenterImportJob#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#deletion_policy MigrationCenterImportJob#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-friendly display name. Maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#display_name MigrationCenterImportJob#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#id MigrationCenterImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#labels MigrationCenterImportJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#project MigrationCenterImportJob#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.timeouts"></a>

```java
public MigrationCenterImportJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#timeouts MigrationCenterImportJob#timeouts}

---

### MigrationCenterImportJobExecutionReport <a name="MigrationCenterImportJobExecutionReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReport.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReport;

MigrationCenterImportJobExecutionReport.builder()
    .build();
```


### MigrationCenterImportJobExecutionReportExecutionErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrors.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrors;

MigrationCenterImportJobExecutionReportExecutionErrors.builder()
    .build();
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations;

MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations.builder()
    .build();
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors;

MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors.builder()
    .build();
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors;

MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors.builder()
    .build();
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError;

MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError.builder()
    .build();
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError;

MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError.builder()
    .build();
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError;

MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError.builder()
    .build();
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors;

MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors.builder()
    .build();
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError;

MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError.builder()
    .build();
```


### MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors;

MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors.builder()
    .build();
```


### MigrationCenterImportJobTimeouts <a name="MigrationCenterImportJobTimeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobTimeouts;

MigrationCenterImportJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#create MigrationCenterImportJob#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#delete MigrationCenterImportJob#delete}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#update MigrationCenterImportJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#create MigrationCenterImportJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#delete MigrationCenterImportJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/migration_center_import_job#update MigrationCenterImportJob#update}.

---

### MigrationCenterImportJobValidationReport <a name="MigrationCenterImportJobValidationReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReport.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReport;

MigrationCenterImportJobValidationReport.builder()
    .build();
```


### MigrationCenterImportJobValidationReportFileValidations <a name="MigrationCenterImportJobValidationReportFileValidations" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidations.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidations;

MigrationCenterImportJobValidationReportFileValidations.builder()
    .build();
```


### MigrationCenterImportJobValidationReportFileValidationsFileErrors <a name="MigrationCenterImportJobValidationReportFileValidationsFileErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrors.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsFileErrors;

MigrationCenterImportJobValidationReportFileValidationsFileErrors.builder()
    .build();
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrors <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrors.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrors;

MigrationCenterImportJobValidationReportFileValidationsRowErrors.builder()
    .build();
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError;

MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError.builder()
    .build();
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError;

MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError.builder()
    .build();
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError;

MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError.builder()
    .build();
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors;

MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors.builder()
    .build();
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError;

MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError.builder()
    .build();
```


### MigrationCenterImportJobValidationReportJobErrors <a name="MigrationCenterImportJobValidationReportJobErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrors.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportJobErrors;

MigrationCenterImportJobValidationReportJobErrors.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.errorDetails">errorDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.errorDetails"></a>

```java
public java.lang.String getErrorDetails();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileErrors">fileErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.partialReport">partialReport</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.rowErrors">rowErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileErrors`<sup>Required</sup> <a name="fileErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileErrors"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList getFileErrors();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `partialReport`<sup>Required</sup> <a name="partialReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.partialReport"></a>

```java
public IResolvable getPartialReport();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `rowErrors`<sup>Required</sup> <a name="rowErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.rowErrors"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList getRowErrors();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber">rowNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rowNumber`<sup>Required</sup> <a name="rowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber"></a>

```java
public java.lang.Number getRowNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError">csvError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath">filePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csvError`<sup>Required</sup> <a name="csvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList getCsvError();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList</a>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber">rowNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rowNumber`<sup>Required</sup> <a name="rowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber"></a>

```java
public java.lang.Number getRowNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.errorDetails">errorDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.errorDetails"></a>

```java
public java.lang.String getErrorDetails();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.archiveError">archiveError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.assetTitle">assetTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.csvError">csvError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.rowNumber">rowNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmName">vmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmUuid">vmUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.xlsxError">xlsxError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveError`<sup>Required</sup> <a name="archiveError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.archiveError"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList getArchiveError();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList</a>

---

##### `assetTitle`<sup>Required</sup> <a name="assetTitle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.assetTitle"></a>

```java
public java.lang.String getAssetTitle();
```

- *Type:* java.lang.String

---

##### `csvError`<sup>Required</sup> <a name="csvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.csvError"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList getCsvError();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.errors"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList getErrors();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList</a>

---

##### `rowNumber`<sup>Required</sup> <a name="rowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.rowNumber"></a>

```java
public java.lang.Number getRowNumber();
```

- *Type:* java.lang.Number

---

##### `vmName`<sup>Required</sup> <a name="vmName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmName"></a>

```java
public java.lang.String getVmName();
```

- *Type:* java.lang.String

---

##### `vmUuid`<sup>Required</sup> <a name="vmUuid" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmUuid"></a>

```java
public java.lang.String getVmUuid();
```

- *Type:* java.lang.String

---

##### `xlsxError`<sup>Required</sup> <a name="xlsxError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.xlsxError"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList getXlsxError();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber">rowNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet">sheet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rowNumber`<sup>Required</sup> <a name="rowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber"></a>

```java
public java.lang.Number getRowNumber();
```

- *Type:* java.lang.Number

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet"></a>

```java
public java.lang.String getSheet();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList;

new MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference;

new MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.errorDetails">errorDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors">MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.errorDetails"></a>

```java
public java.lang.String getErrorDetails();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors">MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsList;

new MigrationCenterImportJobExecutionReportExecutionErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.get"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference;

new MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fileValidations">fileValidations</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.jobErrors">jobErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrors">MigrationCenterImportJobExecutionReportExecutionErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileValidations`<sup>Required</sup> <a name="fileValidations" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fileValidations"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList getFileValidations();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList</a>

---

##### `jobErrors`<sup>Required</sup> <a name="jobErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.jobErrors"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList getJobErrors();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrors">MigrationCenterImportJobExecutionReportExecutionErrors</a>

---


### MigrationCenterImportJobExecutionReportList <a name="MigrationCenterImportJobExecutionReportList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportList;

new MigrationCenterImportJobExecutionReportList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.get"></a>

```java
public MigrationCenterImportJobExecutionReportOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobExecutionReportOutputReference <a name="MigrationCenterImportJobExecutionReportOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobExecutionReportOutputReference;

new MigrationCenterImportJobExecutionReportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.executionErrors">executionErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.framesReported">framesReported</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.totalRowsCount">totalRowsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReport">MigrationCenterImportJobExecutionReport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionErrors`<sup>Required</sup> <a name="executionErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.executionErrors"></a>

```java
public MigrationCenterImportJobExecutionReportExecutionErrorsList getExecutionErrors();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsList</a>

---

##### `framesReported`<sup>Required</sup> <a name="framesReported" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.framesReported"></a>

```java
public java.lang.Number getFramesReported();
```

- *Type:* java.lang.Number

---

##### `totalRowsCount`<sup>Required</sup> <a name="totalRowsCount" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.totalRowsCount"></a>

```java
public java.lang.Number getTotalRowsCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobExecutionReport getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReport">MigrationCenterImportJobExecutionReport</a>

---


### MigrationCenterImportJobTimeoutsOutputReference <a name="MigrationCenterImportJobTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobTimeoutsOutputReference;

new MigrationCenterImportJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|MigrationCenterImportJobTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a>

---


### MigrationCenterImportJobValidationReportFileValidationsFileErrorsList <a name="MigrationCenterImportJobValidationReportFileValidationsFileErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList;

new MigrationCenterImportJobValidationReportFileValidationsFileErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference;

new MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.errorDetails">errorDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrors">MigrationCenterImportJobValidationReportFileValidationsFileErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.errorDetails"></a>

```java
public java.lang.String getErrorDetails();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsFileErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrors">MigrationCenterImportJobValidationReportFileValidationsFileErrors</a>

---


### MigrationCenterImportJobValidationReportFileValidationsList <a name="MigrationCenterImportJobValidationReportFileValidationsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsList;

new MigrationCenterImportJobValidationReportFileValidationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.get"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobValidationReportFileValidationsOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsOutputReference;

new MigrationCenterImportJobValidationReportFileValidationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileErrors">fileErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList">MigrationCenterImportJobValidationReportFileValidationsFileErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.partialReport">partialReport</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.rowErrors">rowErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidations">MigrationCenterImportJobValidationReportFileValidations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileErrors`<sup>Required</sup> <a name="fileErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileErrors"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsFileErrorsList getFileErrors();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList">MigrationCenterImportJobValidationReportFileValidationsFileErrorsList</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `partialReport`<sup>Required</sup> <a name="partialReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.partialReport"></a>

```java
public IResolvable getPartialReport();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `rowErrors`<sup>Required</sup> <a name="rowErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.rowErrors"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsList getRowErrors();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobValidationReportFileValidations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidations">MigrationCenterImportJobValidationReportFileValidations</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber">rowNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rowNumber`<sup>Required</sup> <a name="rowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber"></a>

```java
public java.lang.Number getRowNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError">csvError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath">filePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csvError`<sup>Required</sup> <a name="csvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList getCsvError();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList</a>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber">rowNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rowNumber`<sup>Required</sup> <a name="rowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber"></a>

```java
public java.lang.Number getRowNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.errorDetails">errorDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors">MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.errorDetails"></a>

```java
public java.lang.String getErrorDetails();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors">MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.archiveError">archiveError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.assetTitle">assetTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.csvError">csvError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.rowNumber">rowNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmName">vmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmUuid">vmUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.xlsxError">xlsxError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrors">MigrationCenterImportJobValidationReportFileValidationsRowErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveError`<sup>Required</sup> <a name="archiveError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.archiveError"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList getArchiveError();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList</a>

---

##### `assetTitle`<sup>Required</sup> <a name="assetTitle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.assetTitle"></a>

```java
public java.lang.String getAssetTitle();
```

- *Type:* java.lang.String

---

##### `csvError`<sup>Required</sup> <a name="csvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.csvError"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList getCsvError();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.errors"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList getErrors();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList</a>

---

##### `rowNumber`<sup>Required</sup> <a name="rowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.rowNumber"></a>

```java
public java.lang.Number getRowNumber();
```

- *Type:* java.lang.Number

---

##### `vmName`<sup>Required</sup> <a name="vmName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmName"></a>

```java
public java.lang.String getVmName();
```

- *Type:* java.lang.String

---

##### `vmUuid`<sup>Required</sup> <a name="vmUuid" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmUuid"></a>

```java
public java.lang.String getVmUuid();
```

- *Type:* java.lang.String

---

##### `xlsxError`<sup>Required</sup> <a name="xlsxError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.xlsxError"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList getXlsxError();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrors">MigrationCenterImportJobValidationReportFileValidationsRowErrors</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber">rowNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet">sheet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rowNumber`<sup>Required</sup> <a name="rowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber"></a>

```java
public java.lang.Number getRowNumber();
```

- *Type:* java.lang.Number

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet"></a>

```java
public java.lang.String getSheet();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError</a>

---


### MigrationCenterImportJobValidationReportJobErrorsList <a name="MigrationCenterImportJobValidationReportJobErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportJobErrorsList;

new MigrationCenterImportJobValidationReportJobErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.get"></a>

```java
public MigrationCenterImportJobValidationReportJobErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobValidationReportJobErrorsOutputReference <a name="MigrationCenterImportJobValidationReportJobErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportJobErrorsOutputReference;

new MigrationCenterImportJobValidationReportJobErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.errorDetails">errorDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrors">MigrationCenterImportJobValidationReportJobErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.errorDetails"></a>

```java
public java.lang.String getErrorDetails();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobValidationReportJobErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrors">MigrationCenterImportJobValidationReportJobErrors</a>

---


### MigrationCenterImportJobValidationReportList <a name="MigrationCenterImportJobValidationReportList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportList;

new MigrationCenterImportJobValidationReportList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.get"></a>

```java
public MigrationCenterImportJobValidationReportOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterImportJobValidationReportOutputReference <a name="MigrationCenterImportJobValidationReportOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_import_job.MigrationCenterImportJobValidationReportOutputReference;

new MigrationCenterImportJobValidationReportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.fileValidations">fileValidations</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList">MigrationCenterImportJobValidationReportFileValidationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.jobErrors">jobErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList">MigrationCenterImportJobValidationReportJobErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReport">MigrationCenterImportJobValidationReport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileValidations`<sup>Required</sup> <a name="fileValidations" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.fileValidations"></a>

```java
public MigrationCenterImportJobValidationReportFileValidationsList getFileValidations();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList">MigrationCenterImportJobValidationReportFileValidationsList</a>

---

##### `jobErrors`<sup>Required</sup> <a name="jobErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.jobErrors"></a>

```java
public MigrationCenterImportJobValidationReportJobErrorsList getJobErrors();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList">MigrationCenterImportJobValidationReportJobErrorsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.internalValue"></a>

```java
public MigrationCenterImportJobValidationReport getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReport">MigrationCenterImportJobValidationReport</a>

---



