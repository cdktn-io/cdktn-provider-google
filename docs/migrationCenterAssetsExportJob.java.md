# `migrationCenterAssetsExportJob` Submodule <a name="`migrationCenterAssetsExportJob` Submodule" id="@cdktn/provider-google.migrationCenterAssetsExportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterAssetsExportJob <a name="MigrationCenterAssetsExportJob" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job google_migration_center_assets_export_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJob;

MigrationCenterAssetsExportJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assetsExportJobId(java.lang.String)
    .location(java.lang.String)
//  .condition(MigrationCenterAssetsExportJobCondition)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .performanceData(MigrationCenterAssetsExportJobPerformanceData)
//  .project(java.lang.String)
//  .showHidden(java.lang.Boolean|IResolvable)
//  .signedUriDestination(MigrationCenterAssetsExportJobSignedUriDestination)
//  .timeouts(MigrationCenterAssetsExportJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.assetsExportJobId">assetsExportJobId</a></code> | <code>java.lang.String</code> | The ID to use for the asset export job. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#id MigrationCenterAssetsExportJob#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Labels must meet the following constraints:. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.performanceData">performanceData</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a></code> | performance_data block. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#project MigrationCenterAssetsExportJob#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.showHidden">showHidden</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When this value is set to 'true' the response will include all assets, including those that are hidden. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.signedUriDestination">signedUriDestination</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a></code> | signed_uri_destination block. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetsExportJobId`<sup>Required</sup> <a name="assetsExportJobId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.assetsExportJobId"></a>

- *Type:* java.lang.String

The ID to use for the asset export job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#assets_export_job_id MigrationCenterAssetsExportJob#assets_export_job_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#location MigrationCenterAssetsExportJob#location}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#condition MigrationCenterAssetsExportJob#condition}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#deletion_policy MigrationCenterAssetsExportJob#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#id MigrationCenterAssetsExportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Labels must meet the following constraints:.

* Keys and values can contain only lowercase letters, numeric characters,
  underscores, and dashes.
* All characters must use UTF-8 encoding, and international characters are
  allowed.
* Keys must start with a lowercase letter or international character.
* Each resource is limited to a maximum of 64 labels.

Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#labels MigrationCenterAssetsExportJob#labels}

---

##### `performanceData`<sup>Optional</sup> <a name="performanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.performanceData"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

performance_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#performance_data MigrationCenterAssetsExportJob#performance_data}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#project MigrationCenterAssetsExportJob#project}.

---

##### `showHidden`<sup>Optional</sup> <a name="showHidden" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.showHidden"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When this value is set to 'true' the response will include all assets, including those that are hidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#show_hidden MigrationCenterAssetsExportJob#show_hidden}

---

##### `signedUriDestination`<sup>Optional</sup> <a name="signedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.signedUriDestination"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

signed_uri_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#signed_uri_destination MigrationCenterAssetsExportJob#signed_uri_destination}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#timeouts MigrationCenterAssetsExportJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putPerformanceData">putPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putSignedUriDestination">putSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetPerformanceData">resetPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetShowHidden">resetShowHidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetSignedUriDestination">resetSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putCondition"></a>

```java
public void putCondition(MigrationCenterAssetsExportJobCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

---

##### `putPerformanceData` <a name="putPerformanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putPerformanceData"></a>

```java
public void putPerformanceData(MigrationCenterAssetsExportJobPerformanceData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putPerformanceData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

---

##### `putSignedUriDestination` <a name="putSignedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putSignedUriDestination"></a>

```java
public void putSignedUriDestination(MigrationCenterAssetsExportJobSignedUriDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putSignedUriDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putTimeouts"></a>

```java
public void putTimeouts(MigrationCenterAssetsExportJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPerformanceData` <a name="resetPerformanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetPerformanceData"></a>

```java
public void resetPerformanceData()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetShowHidden` <a name="resetShowHidden" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetShowHidden"></a>

```java
public void resetShowHidden()
```

##### `resetSignedUriDestination` <a name="resetSignedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetSignedUriDestination"></a>

```java
public void resetSignedUriDestination()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MigrationCenterAssetsExportJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isConstruct"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJob;

MigrationCenterAssetsExportJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformElement"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJob;

MigrationCenterAssetsExportJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformResource"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJob;

MigrationCenterAssetsExportJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJob;

MigrationCenterAssetsExportJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MigrationCenterAssetsExportJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MigrationCenterAssetsExportJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MigrationCenterAssetsExportJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MigrationCenterAssetsExportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterAssetsExportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference">MigrationCenterAssetsExportJobConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.inventory">inventory</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList">MigrationCenterAssetsExportJobInventoryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.networkDependencies">networkDependencies</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList">MigrationCenterAssetsExportJobNetworkDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.performanceData">performanceData</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference">MigrationCenterAssetsExportJobPerformanceDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.recentExecutions">recentExecutions</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList">MigrationCenterAssetsExportJobRecentExecutionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.signedUriDestination">signedUriDestination</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference">MigrationCenterAssetsExportJobSignedUriDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference">MigrationCenterAssetsExportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.assetsExportJobIdInput">assetsExportJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.performanceDataInput">performanceDataInput</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.showHiddenInput">showHiddenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.signedUriDestinationInput">signedUriDestinationInput</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.assetsExportJobId">assetsExportJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.showHidden">showHidden</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.condition"></a>

```java
public MigrationCenterAssetsExportJobConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference">MigrationCenterAssetsExportJobConditionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `inventory`<sup>Required</sup> <a name="inventory" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.inventory"></a>

```java
public MigrationCenterAssetsExportJobInventoryList getInventory();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList">MigrationCenterAssetsExportJobInventoryList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkDependencies`<sup>Required</sup> <a name="networkDependencies" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.networkDependencies"></a>

```java
public MigrationCenterAssetsExportJobNetworkDependenciesList getNetworkDependencies();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList">MigrationCenterAssetsExportJobNetworkDependenciesList</a>

---

##### `performanceData`<sup>Required</sup> <a name="performanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.performanceData"></a>

```java
public MigrationCenterAssetsExportJobPerformanceDataOutputReference getPerformanceData();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference">MigrationCenterAssetsExportJobPerformanceDataOutputReference</a>

---

##### `recentExecutions`<sup>Required</sup> <a name="recentExecutions" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.recentExecutions"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsList getRecentExecutions();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList">MigrationCenterAssetsExportJobRecentExecutionsList</a>

---

##### `signedUriDestination`<sup>Required</sup> <a name="signedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.signedUriDestination"></a>

```java
public MigrationCenterAssetsExportJobSignedUriDestinationOutputReference getSignedUriDestination();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference">MigrationCenterAssetsExportJobSignedUriDestinationOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.timeouts"></a>

```java
public MigrationCenterAssetsExportJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference">MigrationCenterAssetsExportJobTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `assetsExportJobIdInput`<sup>Optional</sup> <a name="assetsExportJobIdInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.assetsExportJobIdInput"></a>

```java
public java.lang.String getAssetsExportJobIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.conditionInput"></a>

```java
public MigrationCenterAssetsExportJobCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `performanceDataInput`<sup>Optional</sup> <a name="performanceDataInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.performanceDataInput"></a>

```java
public MigrationCenterAssetsExportJobPerformanceData getPerformanceDataInput();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `showHiddenInput`<sup>Optional</sup> <a name="showHiddenInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.showHiddenInput"></a>

```java
public java.lang.Boolean|IResolvable getShowHiddenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `signedUriDestinationInput`<sup>Optional</sup> <a name="signedUriDestinationInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.signedUriDestinationInput"></a>

```java
public MigrationCenterAssetsExportJobSignedUriDestination getSignedUriDestinationInput();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.timeoutsInput"></a>

```java
public IResolvable|MigrationCenterAssetsExportJobTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

---

##### `assetsExportJobId`<sup>Required</sup> <a name="assetsExportJobId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.assetsExportJobId"></a>

```java
public java.lang.String getAssetsExportJobId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `showHidden`<sup>Required</sup> <a name="showHidden" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.showHidden"></a>

```java
public java.lang.Boolean|IResolvable getShowHidden();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterAssetsExportJobCondition <a name="MigrationCenterAssetsExportJobCondition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobCondition;

MigrationCenterAssetsExportJobCondition.builder()
//  .filter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition.property.filter">filter</a></code> | <code>java.lang.String</code> | Assets filter, supports the same syntax as asset listing. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Assets filter, supports the same syntax as asset listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#filter MigrationCenterAssetsExportJob#filter}

---

### MigrationCenterAssetsExportJobConfig <a name="MigrationCenterAssetsExportJobConfig" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobConfig;

MigrationCenterAssetsExportJobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assetsExportJobId(java.lang.String)
    .location(java.lang.String)
//  .condition(MigrationCenterAssetsExportJobCondition)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .performanceData(MigrationCenterAssetsExportJobPerformanceData)
//  .project(java.lang.String)
//  .showHidden(java.lang.Boolean|IResolvable)
//  .signedUriDestination(MigrationCenterAssetsExportJobSignedUriDestination)
//  .timeouts(MigrationCenterAssetsExportJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.assetsExportJobId">assetsExportJobId</a></code> | <code>java.lang.String</code> | The ID to use for the asset export job. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#id MigrationCenterAssetsExportJob#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Labels must meet the following constraints:. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.performanceData">performanceData</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a></code> | performance_data block. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#project MigrationCenterAssetsExportJob#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.showHidden">showHidden</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When this value is set to 'true' the response will include all assets, including those that are hidden. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.signedUriDestination">signedUriDestination</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a></code> | signed_uri_destination block. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetsExportJobId`<sup>Required</sup> <a name="assetsExportJobId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.assetsExportJobId"></a>

```java
public java.lang.String getAssetsExportJobId();
```

- *Type:* java.lang.String

The ID to use for the asset export job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#assets_export_job_id MigrationCenterAssetsExportJob#assets_export_job_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#location MigrationCenterAssetsExportJob#location}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.condition"></a>

```java
public MigrationCenterAssetsExportJobCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#condition MigrationCenterAssetsExportJob#condition}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#deletion_policy MigrationCenterAssetsExportJob#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#id MigrationCenterAssetsExportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Labels must meet the following constraints:.

* Keys and values can contain only lowercase letters, numeric characters,
  underscores, and dashes.
* All characters must use UTF-8 encoding, and international characters are
  allowed.
* Keys must start with a lowercase letter or international character.
* Each resource is limited to a maximum of 64 labels.

Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#labels MigrationCenterAssetsExportJob#labels}

---

##### `performanceData`<sup>Optional</sup> <a name="performanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.performanceData"></a>

```java
public MigrationCenterAssetsExportJobPerformanceData getPerformanceData();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

performance_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#performance_data MigrationCenterAssetsExportJob#performance_data}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#project MigrationCenterAssetsExportJob#project}.

---

##### `showHidden`<sup>Optional</sup> <a name="showHidden" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.showHidden"></a>

```java
public java.lang.Boolean|IResolvable getShowHidden();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When this value is set to 'true' the response will include all assets, including those that are hidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#show_hidden MigrationCenterAssetsExportJob#show_hidden}

---

##### `signedUriDestination`<sup>Optional</sup> <a name="signedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.signedUriDestination"></a>

```java
public MigrationCenterAssetsExportJobSignedUriDestination getSignedUriDestination();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

signed_uri_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#signed_uri_destination MigrationCenterAssetsExportJob#signed_uri_destination}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.timeouts"></a>

```java
public MigrationCenterAssetsExportJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#timeouts MigrationCenterAssetsExportJob#timeouts}

---

### MigrationCenterAssetsExportJobInventory <a name="MigrationCenterAssetsExportJobInventory" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobInventory;

MigrationCenterAssetsExportJobInventory.builder()
    .build();
```


### MigrationCenterAssetsExportJobNetworkDependencies <a name="MigrationCenterAssetsExportJobNetworkDependencies" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobNetworkDependencies;

MigrationCenterAssetsExportJobNetworkDependencies.builder()
    .build();
```


### MigrationCenterAssetsExportJobPerformanceData <a name="MigrationCenterAssetsExportJobPerformanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobPerformanceData;

MigrationCenterAssetsExportJobPerformanceData.builder()
//  .maxDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData.property.maxDays">maxDays</a></code> | <code>java.lang.Number</code> | When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available. |

---

##### `maxDays`<sup>Optional</sup> <a name="maxDays" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData.property.maxDays"></a>

```java
public java.lang.Number getMaxDays();
```

- *Type:* java.lang.Number

When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available.

When this value is unset (or set to zero),
all available data is returned.
The maximum value is 420; values above 420 will be coerced to 420.
If unset (0 value) a default value of 40 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#max_days MigrationCenterAssetsExportJob#max_days}

---

### MigrationCenterAssetsExportJobRecentExecutions <a name="MigrationCenterAssetsExportJobRecentExecutions" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutions;

MigrationCenterAssetsExportJobRecentExecutions.builder()
    .build();
```


### MigrationCenterAssetsExportJobRecentExecutionsResult <a name="MigrationCenterAssetsExportJobRecentExecutionsResult" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResult;

MigrationCenterAssetsExportJobRecentExecutionsResult.builder()
    .build();
```


### MigrationCenterAssetsExportJobRecentExecutionsResultError <a name="MigrationCenterAssetsExportJobRecentExecutionsResultError" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultError;

MigrationCenterAssetsExportJobRecentExecutionsResultError.builder()
    .build();
```


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails;

MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails.builder()
    .build();
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles;

MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles.builder()
    .build();
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries;

MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries.builder()
    .build();
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile;

MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile.builder()
    .build();
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri;

MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri.builder()
    .build();
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile;

MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile.builder()
    .build();
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri;

MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri.builder()
    .build();
```


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris;

MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris.builder()
    .build();
```


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris;

MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris.builder()
    .build();
```


### MigrationCenterAssetsExportJobSignedUriDestination <a name="MigrationCenterAssetsExportJobSignedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobSignedUriDestination;

MigrationCenterAssetsExportJobSignedUriDestination.builder()
    .fileFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination.property.fileFormat">fileFormat</a></code> | <code>java.lang.String</code> | The file format to export. Possible values: CSV XLSX. |

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination.property.fileFormat"></a>

```java
public java.lang.String getFileFormat();
```

- *Type:* java.lang.String

The file format to export. Possible values: CSV XLSX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#file_format MigrationCenterAssetsExportJob#file_format}

---

### MigrationCenterAssetsExportJobTimeouts <a name="MigrationCenterAssetsExportJobTimeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobTimeouts;

MigrationCenterAssetsExportJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#create MigrationCenterAssetsExportJob#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#delete MigrationCenterAssetsExportJob#delete}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#update MigrationCenterAssetsExportJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#create MigrationCenterAssetsExportJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#delete MigrationCenterAssetsExportJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_assets_export_job#update MigrationCenterAssetsExportJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterAssetsExportJobConditionOutputReference <a name="MigrationCenterAssetsExportJobConditionOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobConditionOutputReference;

new MigrationCenterAssetsExportJobConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resetFilter"></a>

```java
public void resetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

---


### MigrationCenterAssetsExportJobInventoryList <a name="MigrationCenterAssetsExportJobInventoryList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobInventoryList;

new MigrationCenterAssetsExportJobInventoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.get"></a>

```java
public MigrationCenterAssetsExportJobInventoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobInventoryOutputReference <a name="MigrationCenterAssetsExportJobInventoryOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobInventoryOutputReference;

new MigrationCenterAssetsExportJobInventoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory">MigrationCenterAssetsExportJobInventory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobInventory getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory">MigrationCenterAssetsExportJobInventory</a>

---


### MigrationCenterAssetsExportJobNetworkDependenciesList <a name="MigrationCenterAssetsExportJobNetworkDependenciesList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobNetworkDependenciesList;

new MigrationCenterAssetsExportJobNetworkDependenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.get"></a>

```java
public MigrationCenterAssetsExportJobNetworkDependenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobNetworkDependenciesOutputReference <a name="MigrationCenterAssetsExportJobNetworkDependenciesOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference;

new MigrationCenterAssetsExportJobNetworkDependenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies">MigrationCenterAssetsExportJobNetworkDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobNetworkDependencies getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies">MigrationCenterAssetsExportJobNetworkDependencies</a>

---


### MigrationCenterAssetsExportJobPerformanceDataOutputReference <a name="MigrationCenterAssetsExportJobPerformanceDataOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobPerformanceDataOutputReference;

new MigrationCenterAssetsExportJobPerformanceDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resetMaxDays">resetMaxDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxDays` <a name="resetMaxDays" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resetMaxDays"></a>

```java
public void resetMaxDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDaysInput">maxDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDays">maxDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxDaysInput`<sup>Optional</sup> <a name="maxDaysInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDaysInput"></a>

```java
public java.lang.Number getMaxDaysInput();
```

- *Type:* java.lang.Number

---

##### `maxDays`<sup>Required</sup> <a name="maxDays" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDays"></a>

```java
public java.lang.Number getMaxDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobPerformanceData getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsList <a name="MigrationCenterAssetsExportJobRecentExecutionsList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsList;

new MigrationCenterAssetsExportJobRecentExecutionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.get"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobRecentExecutionsOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsOutputReference;

new MigrationCenterAssetsExportJobRecentExecutionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.executionId">executionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.requestedAssetCount">requestedAssetCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.result">result</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList">MigrationCenterAssetsExportJobRecentExecutionsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions">MigrationCenterAssetsExportJobRecentExecutions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.executionId"></a>

```java
public java.lang.String getExecutionId();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `requestedAssetCount`<sup>Required</sup> <a name="requestedAssetCount" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.requestedAssetCount"></a>

```java
public java.lang.Number getRequestedAssetCount();
```

- *Type:* java.lang.Number

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.result"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList">MigrationCenterAssetsExportJobRecentExecutionsResultList</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions">MigrationCenterAssetsExportJobRecentExecutions</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList;

new MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference;

new MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails">MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails">MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList;

new MigrationCenterAssetsExportJobRecentExecutionsResultErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference;

new MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList">MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError">MigrationCenterAssetsExportJobRecentExecutionsResultError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.details"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList getDetails();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList">MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError">MigrationCenterAssetsExportJobRecentExecutionsResultError</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultList;

new MigrationCenterAssetsExportJobRecentExecutionsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.get"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.columnsCount">columnsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.rowCount">rowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.signedUri">signedUri</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnsCount`<sup>Required</sup> <a name="columnsCount" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.columnsCount"></a>

```java
public java.lang.Number getColumnsCount();
```

- *Type:* java.lang.Number

---

##### `rowCount`<sup>Required</sup> <a name="rowCount" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.rowCount"></a>

```java
public java.lang.Number getRowCount();
```

- *Type:* java.lang.Number

---

##### `signedUri`<sup>Required</sup> <a name="signedUri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.signedUri"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList getSignedUri();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.csvOutputFile">csvOutputFile</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fileSizeBytes">fileSizeBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.xlsxOutputFile">xlsxOutputFile</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csvOutputFile`<sup>Required</sup> <a name="csvOutputFile" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.csvOutputFile"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList getCsvOutputFile();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList</a>

---

##### `fileSizeBytes`<sup>Required</sup> <a name="fileSizeBytes" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fileSizeBytes"></a>

```java
public java.lang.String getFileSizeBytes();
```

- *Type:* java.lang.String

---

##### `xlsxOutputFile`<sup>Required</sup> <a name="xlsxOutputFile" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.xlsxOutputFile"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList getXlsxOutputFile();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.signedUri">signedUri</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signedUri`<sup>Required</sup> <a name="signedUri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.signedUri"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList getSignedUri();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.entries"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList getEntries();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList">MigrationCenterAssetsExportJobRecentExecutionsResultErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.outputFiles">outputFiles</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.signedUris">signedUris</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult">MigrationCenterAssetsExportJobRecentExecutionsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.error"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList">MigrationCenterAssetsExportJobRecentExecutionsResultErrorList</a>

---

##### `outputFiles`<sup>Required</sup> <a name="outputFiles" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.outputFiles"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList getOutputFiles();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList</a>

---

##### `signedUris`<sup>Required</sup> <a name="signedUris" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.signedUris"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList getSignedUris();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult">MigrationCenterAssetsExportJobRecentExecutionsResult</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList;

new MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference;

new MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.signedUris">signedUris</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signedUris`<sup>Required</sup> <a name="signedUris" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.signedUris"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList getSignedUris();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList;

new MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference;

new MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris</a>

---


### MigrationCenterAssetsExportJobSignedUriDestinationOutputReference <a name="MigrationCenterAssetsExportJobSignedUriDestinationOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference;

new MigrationCenterAssetsExportJobSignedUriDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormatInput">fileFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormat">fileFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileFormatInput`<sup>Optional</sup> <a name="fileFormatInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormatInput"></a>

```java
public java.lang.String getFileFormatInput();
```

- *Type:* java.lang.String

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormat"></a>

```java
public java.lang.String getFileFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.internalValue"></a>

```java
public MigrationCenterAssetsExportJobSignedUriDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

---


### MigrationCenterAssetsExportJobTimeoutsOutputReference <a name="MigrationCenterAssetsExportJobTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_assets_export_job.MigrationCenterAssetsExportJobTimeoutsOutputReference;

new MigrationCenterAssetsExportJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|MigrationCenterAssetsExportJobTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

---



