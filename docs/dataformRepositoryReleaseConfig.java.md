# `dataformRepositoryReleaseConfig` Submodule <a name="`dataformRepositoryReleaseConfig` Submodule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataformRepositoryReleaseConfig <a name="DataformRepositoryReleaseConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config google_dataform_repository_release_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfig;

DataformRepositoryReleaseConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gitCommitish(java.lang.String)
    .name(java.lang.String)
//  .codeCompilationConfig(DataformRepositoryReleaseConfigCodeCompilationConfig)
//  .cronSchedule(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .repository(java.lang.String)
//  .timeouts(DataformRepositoryReleaseConfigTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.gitCommitish">gitCommitish</a></code> | <code>java.lang.String</code> | Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The release's name. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.codeCompilationConfig">codeCompilationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | code_compilation_config block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gitCommitish`<sup>Required</sup> <a name="gitCommitish" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.gitCommitish"></a>

- *Type:* java.lang.String

Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#git_commitish DataformRepositoryReleaseConfig#git_commitish}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The release's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#name DataformRepositoryReleaseConfig#name}

---

##### `codeCompilationConfig`<sup>Optional</sup> <a name="codeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.codeCompilationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

code_compilation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#code_compilation_config DataformRepositoryReleaseConfig#code_compilation_config}

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.cronSchedule"></a>

- *Type:* java.lang.String

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#cron_schedule DataformRepositoryReleaseConfig#cron_schedule}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#deletion_policy DataformRepositoryReleaseConfig#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#disabled DataformRepositoryReleaseConfig#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.region"></a>

- *Type:* java.lang.String

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#region DataformRepositoryReleaseConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#repository DataformRepositoryReleaseConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#timeouts DataformRepositoryReleaseConfig#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#time_zone DataformRepositoryReleaseConfig#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig">putCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCodeCompilationConfig">resetCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCronSchedule">resetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCodeCompilationConfig` <a name="putCodeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig"></a>

```java
public void putCodeCompilationConfig(DataformRepositoryReleaseConfigCodeCompilationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts"></a>

```java
public void putTimeouts(DataformRepositoryReleaseConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

---

##### `resetCodeCompilationConfig` <a name="resetCodeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCodeCompilationConfig"></a>

```java
public void resetCodeCompilationConfig()
```

##### `resetCronSchedule` <a name="resetCronSchedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCronSchedule"></a>

```java
public void resetCronSchedule()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRepository"></a>

```java
public void resetRepository()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataformRepositoryReleaseConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfig;

DataformRepositoryReleaseConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfig;

DataformRepositoryReleaseConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfig;

DataformRepositoryReleaseConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfig;

DataformRepositoryReleaseConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataformRepositoryReleaseConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataformRepositoryReleaseConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataformRepositoryReleaseConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataformRepositoryReleaseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataformRepositoryReleaseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfig">codeCompilationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference">DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.recentScheduledReleaseRecords">recentScheduledReleaseRecords</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference">DataformRepositoryReleaseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfigInput">codeCompilationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronScheduleInput">cronScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitishInput">gitCommitishInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitish">gitCommitish</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `codeCompilationConfig`<sup>Required</sup> <a name="codeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfig"></a>

```java
public DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference getCodeCompilationConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference">DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference</a>

---

##### `recentScheduledReleaseRecords`<sup>Required</sup> <a name="recentScheduledReleaseRecords" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.recentScheduledReleaseRecords"></a>

```java
public DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList getRecentScheduledReleaseRecords();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeouts"></a>

```java
public DataformRepositoryReleaseConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference">DataformRepositoryReleaseConfigTimeoutsOutputReference</a>

---

##### `codeCompilationConfigInput`<sup>Optional</sup> <a name="codeCompilationConfigInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfigInput"></a>

```java
public DataformRepositoryReleaseConfigCodeCompilationConfig getCodeCompilationConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

---

##### `cronScheduleInput`<sup>Optional</sup> <a name="cronScheduleInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronScheduleInput"></a>

```java
public java.lang.String getCronScheduleInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `gitCommitishInput`<sup>Optional</sup> <a name="gitCommitishInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitishInput"></a>

```java
public java.lang.String getGitCommitishInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeoutsInput"></a>

```java
public IResolvable|DataformRepositoryReleaseConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `gitCommitish`<sup>Required</sup> <a name="gitCommitish" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitish"></a>

```java
public java.lang.String getGitCommitish();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataformRepositoryReleaseConfigCodeCompilationConfig <a name="DataformRepositoryReleaseConfigCodeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfigCodeCompilationConfig;

DataformRepositoryReleaseConfigCodeCompilationConfig.builder()
//  .assertionSchema(java.lang.String)
//  .databaseSuffix(java.lang.String)
//  .defaultDatabase(java.lang.String)
//  .defaultLocation(java.lang.String)
//  .defaultSchema(java.lang.String)
//  .schemaSuffix(java.lang.String)
//  .tablePrefix(java.lang.String)
//  .vars(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.assertionSchema">assertionSchema</a></code> | <code>java.lang.String</code> | Optional. The default schema (BigQuery dataset ID) for assertions. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.databaseSuffix">databaseSuffix</a></code> | <code>java.lang.String</code> | Optional. The suffix that should be appended to all database (Google Cloud project ID) names. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultDatabase">defaultDatabase</a></code> | <code>java.lang.String</code> | Optional. The default database (Google Cloud project ID). |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultSchema">defaultSchema</a></code> | <code>java.lang.String</code> | Optional. The default schema (BigQuery dataset ID). |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.schemaSuffix">schemaSuffix</a></code> | <code>java.lang.String</code> | Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | Optional. The prefix that should be prepended to all table names. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.vars">vars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `assertionSchema`<sup>Optional</sup> <a name="assertionSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.assertionSchema"></a>

```java
public java.lang.String getAssertionSchema();
```

- *Type:* java.lang.String

Optional. The default schema (BigQuery dataset ID) for assertions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#assertion_schema DataformRepositoryReleaseConfig#assertion_schema}

---

##### `databaseSuffix`<sup>Optional</sup> <a name="databaseSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.databaseSuffix"></a>

```java
public java.lang.String getDatabaseSuffix();
```

- *Type:* java.lang.String

Optional. The suffix that should be appended to all database (Google Cloud project ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#database_suffix DataformRepositoryReleaseConfig#database_suffix}

---

##### `defaultDatabase`<sup>Optional</sup> <a name="defaultDatabase" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultDatabase"></a>

```java
public java.lang.String getDefaultDatabase();
```

- *Type:* java.lang.String

Optional. The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_database DataformRepositoryReleaseConfig#default_database}

---

##### `defaultLocation`<sup>Optional</sup> <a name="defaultLocation" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultLocation"></a>

```java
public java.lang.String getDefaultLocation();
```

- *Type:* java.lang.String

Optional.

The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_location DataformRepositoryReleaseConfig#default_location}

---

##### `defaultSchema`<sup>Optional</sup> <a name="defaultSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultSchema"></a>

```java
public java.lang.String getDefaultSchema();
```

- *Type:* java.lang.String

Optional. The default schema (BigQuery dataset ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_schema DataformRepositoryReleaseConfig#default_schema}

---

##### `schemaSuffix`<sup>Optional</sup> <a name="schemaSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.schemaSuffix"></a>

```java
public java.lang.String getSchemaSuffix();
```

- *Type:* java.lang.String

Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#schema_suffix DataformRepositoryReleaseConfig#schema_suffix}

---

##### `tablePrefix`<sup>Optional</sup> <a name="tablePrefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.tablePrefix"></a>

```java
public java.lang.String getTablePrefix();
```

- *Type:* java.lang.String

Optional. The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#table_prefix DataformRepositoryReleaseConfig#table_prefix}

---

##### `vars`<sup>Optional</sup> <a name="vars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.vars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

User-defined variables that are made available to project code during compilation.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#vars DataformRepositoryReleaseConfig#vars}

---

### DataformRepositoryReleaseConfigConfig <a name="DataformRepositoryReleaseConfigConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfigConfig;

DataformRepositoryReleaseConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gitCommitish(java.lang.String)
    .name(java.lang.String)
//  .codeCompilationConfig(DataformRepositoryReleaseConfigCodeCompilationConfig)
//  .cronSchedule(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .repository(java.lang.String)
//  .timeouts(DataformRepositoryReleaseConfigTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.gitCommitish">gitCommitish</a></code> | <code>java.lang.String</code> | Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | The release's name. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.codeCompilationConfig">codeCompilationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | code_compilation_config block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.region">region</a></code> | <code>java.lang.String</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gitCommitish`<sup>Required</sup> <a name="gitCommitish" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.gitCommitish"></a>

```java
public java.lang.String getGitCommitish();
```

- *Type:* java.lang.String

Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#git_commitish DataformRepositoryReleaseConfig#git_commitish}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The release's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#name DataformRepositoryReleaseConfig#name}

---

##### `codeCompilationConfig`<sup>Optional</sup> <a name="codeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.codeCompilationConfig"></a>

```java
public DataformRepositoryReleaseConfigCodeCompilationConfig getCodeCompilationConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

code_compilation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#code_compilation_config DataformRepositoryReleaseConfig#code_compilation_config}

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#cron_schedule DataformRepositoryReleaseConfig#cron_schedule}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#deletion_policy DataformRepositoryReleaseConfig#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#disabled DataformRepositoryReleaseConfig#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#region DataformRepositoryReleaseConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#repository DataformRepositoryReleaseConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeouts"></a>

```java
public DataformRepositoryReleaseConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#timeouts DataformRepositoryReleaseConfig#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#time_zone DataformRepositoryReleaseConfig#time_zone}

---

### DataformRepositoryReleaseConfigRecentScheduledReleaseRecords <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecords" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords;

DataformRepositoryReleaseConfigRecentScheduledReleaseRecords.builder()
    .build();
```


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus;

DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus.builder()
    .build();
```


### DataformRepositoryReleaseConfigTimeouts <a name="DataformRepositoryReleaseConfigTimeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfigTimeouts;

DataformRepositoryReleaseConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#create DataformRepositoryReleaseConfig#create}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#delete DataformRepositoryReleaseConfig#delete}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#update DataformRepositoryReleaseConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#create DataformRepositoryReleaseConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#delete DataformRepositoryReleaseConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#update DataformRepositoryReleaseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference <a name="DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference;

new DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetAssertionSchema">resetAssertionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDatabaseSuffix">resetDatabaseSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultDatabase">resetDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultLocation">resetDefaultLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultSchema">resetDefaultSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetSchemaSuffix">resetSchemaSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetTablePrefix">resetTablePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetVars">resetVars</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssertionSchema` <a name="resetAssertionSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetAssertionSchema"></a>

```java
public void resetAssertionSchema()
```

##### `resetDatabaseSuffix` <a name="resetDatabaseSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDatabaseSuffix"></a>

```java
public void resetDatabaseSuffix()
```

##### `resetDefaultDatabase` <a name="resetDefaultDatabase" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultDatabase"></a>

```java
public void resetDefaultDatabase()
```

##### `resetDefaultLocation` <a name="resetDefaultLocation" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultLocation"></a>

```java
public void resetDefaultLocation()
```

##### `resetDefaultSchema` <a name="resetDefaultSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultSchema"></a>

```java
public void resetDefaultSchema()
```

##### `resetSchemaSuffix` <a name="resetSchemaSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetSchemaSuffix"></a>

```java
public void resetSchemaSuffix()
```

##### `resetTablePrefix` <a name="resetTablePrefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetTablePrefix"></a>

```java
public void resetTablePrefix()
```

##### `resetVars` <a name="resetVars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetVars"></a>

```java
public void resetVars()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchemaInput">assertionSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffixInput">databaseSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabaseInput">defaultDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocationInput">defaultLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchemaInput">defaultSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffixInput">schemaSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefixInput">tablePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.varsInput">varsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchema">assertionSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffix">databaseSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabase">defaultDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchema">defaultSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffix">schemaSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.vars">vars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assertionSchemaInput`<sup>Optional</sup> <a name="assertionSchemaInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchemaInput"></a>

```java
public java.lang.String getAssertionSchemaInput();
```

- *Type:* java.lang.String

---

##### `databaseSuffixInput`<sup>Optional</sup> <a name="databaseSuffixInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffixInput"></a>

```java
public java.lang.String getDatabaseSuffixInput();
```

- *Type:* java.lang.String

---

##### `defaultDatabaseInput`<sup>Optional</sup> <a name="defaultDatabaseInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabaseInput"></a>

```java
public java.lang.String getDefaultDatabaseInput();
```

- *Type:* java.lang.String

---

##### `defaultLocationInput`<sup>Optional</sup> <a name="defaultLocationInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocationInput"></a>

```java
public java.lang.String getDefaultLocationInput();
```

- *Type:* java.lang.String

---

##### `defaultSchemaInput`<sup>Optional</sup> <a name="defaultSchemaInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchemaInput"></a>

```java
public java.lang.String getDefaultSchemaInput();
```

- *Type:* java.lang.String

---

##### `schemaSuffixInput`<sup>Optional</sup> <a name="schemaSuffixInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffixInput"></a>

```java
public java.lang.String getSchemaSuffixInput();
```

- *Type:* java.lang.String

---

##### `tablePrefixInput`<sup>Optional</sup> <a name="tablePrefixInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefixInput"></a>

```java
public java.lang.String getTablePrefixInput();
```

- *Type:* java.lang.String

---

##### `varsInput`<sup>Optional</sup> <a name="varsInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.varsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVarsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `assertionSchema`<sup>Required</sup> <a name="assertionSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchema"></a>

```java
public java.lang.String getAssertionSchema();
```

- *Type:* java.lang.String

---

##### `databaseSuffix`<sup>Required</sup> <a name="databaseSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffix"></a>

```java
public java.lang.String getDatabaseSuffix();
```

- *Type:* java.lang.String

---

##### `defaultDatabase`<sup>Required</sup> <a name="defaultDatabase" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabase"></a>

```java
public java.lang.String getDefaultDatabase();
```

- *Type:* java.lang.String

---

##### `defaultLocation`<sup>Required</sup> <a name="defaultLocation" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocation"></a>

```java
public java.lang.String getDefaultLocation();
```

- *Type:* java.lang.String

---

##### `defaultSchema`<sup>Required</sup> <a name="defaultSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchema"></a>

```java
public java.lang.String getDefaultSchema();
```

- *Type:* java.lang.String

---

##### `schemaSuffix`<sup>Required</sup> <a name="schemaSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffix"></a>

```java
public java.lang.String getSchemaSuffix();
```

- *Type:* java.lang.String

---

##### `tablePrefix`<sup>Required</sup> <a name="tablePrefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefix"></a>

```java
public java.lang.String getTablePrefix();
```

- *Type:* java.lang.String

---

##### `vars`<sup>Required</sup> <a name="vars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.vars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.internalValue"></a>

```java
public DataformRepositoryReleaseConfigCodeCompilationConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList;

new DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get"></a>

```java
public DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference;

new DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.internalValue"></a>

```java
public DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus</a>

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList;

new DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get"></a>

```java
public DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference;

new DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.compilationResult">compilationResult</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.errorStatus">errorStatus</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.releaseTime">releaseTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords">DataformRepositoryReleaseConfigRecentScheduledReleaseRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compilationResult`<sup>Required</sup> <a name="compilationResult" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.compilationResult"></a>

```java
public java.lang.String getCompilationResult();
```

- *Type:* java.lang.String

---

##### `errorStatus`<sup>Required</sup> <a name="errorStatus" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.errorStatus"></a>

```java
public DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList getErrorStatus();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList</a>

---

##### `releaseTime`<sup>Required</sup> <a name="releaseTime" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.releaseTime"></a>

```java
public java.lang.String getReleaseTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.internalValue"></a>

```java
public DataformRepositoryReleaseConfigRecentScheduledReleaseRecords getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords">DataformRepositoryReleaseConfigRecentScheduledReleaseRecords</a>

---


### DataformRepositoryReleaseConfigTimeoutsOutputReference <a name="DataformRepositoryReleaseConfigTimeoutsOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_release_config.DataformRepositoryReleaseConfigTimeoutsOutputReference;

new DataformRepositoryReleaseConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataformRepositoryReleaseConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

---



