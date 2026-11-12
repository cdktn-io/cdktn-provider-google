# `dataformRepositoryWorkflowConfig` Submodule <a name="`dataformRepositoryWorkflowConfig` Submodule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataformRepositoryWorkflowConfig <a name="DataformRepositoryWorkflowConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config google_dataform_repository_workflow_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfig;

DataformRepositoryWorkflowConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .releaseConfig(java.lang.String)
//  .cronSchedule(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .invocationConfig(DataformRepositoryWorkflowConfigInvocationConfig)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .repository(java.lang.String)
//  .timeouts(DataformRepositoryWorkflowConfigTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The workflow's name. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.releaseConfig">releaseConfig</a></code> | <code>java.lang.String</code> | The name of the release config whose releaseCompilationResult should be executed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables automatic creation of workflow invocations. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#id DataformRepositoryWorkflowConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.invocationConfig">invocationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | invocation_config block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#project DataformRepositoryWorkflowConfig#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The workflow's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#name DataformRepositoryWorkflowConfig#name}

---

##### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.releaseConfig"></a>

- *Type:* java.lang.String

The name of the release config whose releaseCompilationResult should be executed.

Must be in the format projects/* /locations/* /repositories/* /releaseConfigs/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#release_config DataformRepositoryWorkflowConfig#release_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.cronSchedule"></a>

- *Type:* java.lang.String

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#cron_schedule DataformRepositoryWorkflowConfig#cron_schedule}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#deletion_policy DataformRepositoryWorkflowConfig#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables automatic creation of workflow invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#disabled DataformRepositoryWorkflowConfig#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#id DataformRepositoryWorkflowConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invocationConfig`<sup>Optional</sup> <a name="invocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.invocationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

invocation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#invocation_config DataformRepositoryWorkflowConfig#invocation_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#project DataformRepositoryWorkflowConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.region"></a>

- *Type:* java.lang.String

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#region DataformRepositoryWorkflowConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#repository DataformRepositoryWorkflowConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#timeouts DataformRepositoryWorkflowConfig#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#time_zone DataformRepositoryWorkflowConfig#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig">putInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetCronSchedule">resetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetInvocationConfig">resetInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInvocationConfig` <a name="putInvocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig"></a>

```java
public void putInvocationConfig(DataformRepositoryWorkflowConfigInvocationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts"></a>

```java
public void putTimeouts(DataformRepositoryWorkflowConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

---

##### `resetCronSchedule` <a name="resetCronSchedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetCronSchedule"></a>

```java
public void resetCronSchedule()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetId"></a>

```java
public void resetId()
```

##### `resetInvocationConfig` <a name="resetInvocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetInvocationConfig"></a>

```java
public void resetInvocationConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRepository"></a>

```java
public void resetRepository()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataformRepositoryWorkflowConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isConstruct"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfig;

DataformRepositoryWorkflowConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfig;

DataformRepositoryWorkflowConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfig;

DataformRepositoryWorkflowConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfig;

DataformRepositoryWorkflowConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataformRepositoryWorkflowConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataformRepositoryWorkflowConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataformRepositoryWorkflowConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataformRepositoryWorkflowConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataformRepositoryWorkflowConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfig">invocationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference">DataformRepositoryWorkflowConfigInvocationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.recentScheduledExecutionRecords">recentScheduledExecutionRecords</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference">DataformRepositoryWorkflowConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronScheduleInput">cronScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfigInput">invocationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfigInput">releaseConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfig">releaseConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `invocationConfig`<sup>Required</sup> <a name="invocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfig"></a>

```java
public DataformRepositoryWorkflowConfigInvocationConfigOutputReference getInvocationConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference">DataformRepositoryWorkflowConfigInvocationConfigOutputReference</a>

---

##### `recentScheduledExecutionRecords`<sup>Required</sup> <a name="recentScheduledExecutionRecords" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.recentScheduledExecutionRecords"></a>

```java
public DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList getRecentScheduledExecutionRecords();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeouts"></a>

```java
public DataformRepositoryWorkflowConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference">DataformRepositoryWorkflowConfigTimeoutsOutputReference</a>

---

##### `cronScheduleInput`<sup>Optional</sup> <a name="cronScheduleInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronScheduleInput"></a>

```java
public java.lang.String getCronScheduleInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `invocationConfigInput`<sup>Optional</sup> <a name="invocationConfigInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfigInput"></a>

```java
public DataformRepositoryWorkflowConfigInvocationConfig getInvocationConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `releaseConfigInput`<sup>Optional</sup> <a name="releaseConfigInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfigInput"></a>

```java
public java.lang.String getReleaseConfigInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeoutsInput"></a>

```java
public IResolvable|DataformRepositoryWorkflowConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfig"></a>

```java
public java.lang.String getReleaseConfig();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataformRepositoryWorkflowConfigConfig <a name="DataformRepositoryWorkflowConfigConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigConfig;

DataformRepositoryWorkflowConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .releaseConfig(java.lang.String)
//  .cronSchedule(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .invocationConfig(DataformRepositoryWorkflowConfigInvocationConfig)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .repository(java.lang.String)
//  .timeouts(DataformRepositoryWorkflowConfigTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | The workflow's name. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.releaseConfig">releaseConfig</a></code> | <code>java.lang.String</code> | The name of the release config whose releaseCompilationResult should be executed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables automatic creation of workflow invocations. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#id DataformRepositoryWorkflowConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.invocationConfig">invocationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | invocation_config block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#project DataformRepositoryWorkflowConfig#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.region">region</a></code> | <code>java.lang.String</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The workflow's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#name DataformRepositoryWorkflowConfig#name}

---

##### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.releaseConfig"></a>

```java
public java.lang.String getReleaseConfig();
```

- *Type:* java.lang.String

The name of the release config whose releaseCompilationResult should be executed.

Must be in the format projects/* /locations/* /repositories/* /releaseConfigs/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#release_config DataformRepositoryWorkflowConfig#release_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#cron_schedule DataformRepositoryWorkflowConfig#cron_schedule}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#deletion_policy DataformRepositoryWorkflowConfig#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables automatic creation of workflow invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#disabled DataformRepositoryWorkflowConfig#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#id DataformRepositoryWorkflowConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invocationConfig`<sup>Optional</sup> <a name="invocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.invocationConfig"></a>

```java
public DataformRepositoryWorkflowConfigInvocationConfig getInvocationConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

invocation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#invocation_config DataformRepositoryWorkflowConfig#invocation_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#project DataformRepositoryWorkflowConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#region DataformRepositoryWorkflowConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#repository DataformRepositoryWorkflowConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeouts"></a>

```java
public DataformRepositoryWorkflowConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#timeouts DataformRepositoryWorkflowConfig#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#time_zone DataformRepositoryWorkflowConfig#time_zone}

---

### DataformRepositoryWorkflowConfigInvocationConfig <a name="DataformRepositoryWorkflowConfigInvocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigInvocationConfig;

DataformRepositoryWorkflowConfigInvocationConfig.builder()
//  .fullyRefreshIncrementalTablesEnabled(java.lang.Boolean|IResolvable)
//  .includedTags(java.util.List<java.lang.String>)
//  .includedTargets(IResolvable|java.util.List<DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets>)
//  .serviceAccount(java.lang.String)
//  .transitiveDependenciesIncluded(java.lang.Boolean|IResolvable)
//  .transitiveDependentsIncluded(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.fullyRefreshIncrementalTablesEnabled">fullyRefreshIncrementalTablesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional. When set to true, any incremental tables will be fully refreshed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTags">includedTags</a></code> | <code>java.util.List<java.lang.String></code> | Optional. The set of tags to include. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTargets">includedTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>></code> | included_targets block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Optional. The service account to run workflow invocations under. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependenciesIncluded">transitiveDependenciesIncluded</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional. When set to true, transitive dependencies of included actions will be executed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependentsIncluded">transitiveDependentsIncluded</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional. When set to true, transitive dependents of included actions will be executed. |

---

##### `fullyRefreshIncrementalTablesEnabled`<sup>Optional</sup> <a name="fullyRefreshIncrementalTablesEnabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.fullyRefreshIncrementalTablesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFullyRefreshIncrementalTablesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional. When set to true, any incremental tables will be fully refreshed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#fully_refresh_incremental_tables_enabled DataformRepositoryWorkflowConfig#fully_refresh_incremental_tables_enabled}

---

##### `includedTags`<sup>Optional</sup> <a name="includedTags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTags"></a>

```java
public java.util.List<java.lang.String> getIncludedTags();
```

- *Type:* java.util.List<java.lang.String>

Optional. The set of tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#included_tags DataformRepositoryWorkflowConfig#included_tags}

---

##### `includedTargets`<sup>Optional</sup> <a name="includedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTargets"></a>

```java
public IResolvable|java.util.List<DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets> getIncludedTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>>

included_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#included_targets DataformRepositoryWorkflowConfig#included_targets}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Optional. The service account to run workflow invocations under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#service_account DataformRepositoryWorkflowConfig#service_account}

---

##### `transitiveDependenciesIncluded`<sup>Optional</sup> <a name="transitiveDependenciesIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependenciesIncluded"></a>

```java
public java.lang.Boolean|IResolvable getTransitiveDependenciesIncluded();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional. When set to true, transitive dependencies of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#transitive_dependencies_included DataformRepositoryWorkflowConfig#transitive_dependencies_included}

---

##### `transitiveDependentsIncluded`<sup>Optional</sup> <a name="transitiveDependentsIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependentsIncluded"></a>

```java
public java.lang.Boolean|IResolvable getTransitiveDependentsIncluded();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional. When set to true, transitive dependents of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#transitive_dependents_included DataformRepositoryWorkflowConfig#transitive_dependents_included}

---

### DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets <a name="DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets;

DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.builder()
//  .database(java.lang.String)
//  .name(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.database">database</a></code> | <code>java.lang.String</code> | The action's database (Google Cloud project ID). |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.name">name</a></code> | <code>java.lang.String</code> | The action's name, within database and schema. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.schema">schema</a></code> | <code>java.lang.String</code> | The action's schema (BigQuery dataset ID), within database. |

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The action's database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#database DataformRepositoryWorkflowConfig#database}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The action's name, within database and schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#name DataformRepositoryWorkflowConfig#name}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The action's schema (BigQuery dataset ID), within database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#schema DataformRepositoryWorkflowConfig#schema}

---

### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords;

DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords.builder()
    .build();
```


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus;

DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus.builder()
    .build();
```


### DataformRepositoryWorkflowConfigTimeouts <a name="DataformRepositoryWorkflowConfigTimeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigTimeouts;

DataformRepositoryWorkflowConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#create DataformRepositoryWorkflowConfig#create}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#delete DataformRepositoryWorkflowConfig#delete}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#update DataformRepositoryWorkflowConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#create DataformRepositoryWorkflowConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#delete DataformRepositoryWorkflowConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#update DataformRepositoryWorkflowConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList <a name="DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList;

new DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get"></a>

```java
public DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>>

---


### DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference <a name="DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference;

new DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>

---


### DataformRepositoryWorkflowConfigInvocationConfigOutputReference <a name="DataformRepositoryWorkflowConfigInvocationConfigOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigInvocationConfigOutputReference;

new DataformRepositoryWorkflowConfigInvocationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets">putIncludedTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetFullyRefreshIncrementalTablesEnabled">resetFullyRefreshIncrementalTablesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTags">resetIncludedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTargets">resetIncludedTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependenciesIncluded">resetTransitiveDependenciesIncluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependentsIncluded">resetTransitiveDependentsIncluded</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludedTargets` <a name="putIncludedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets"></a>

```java
public void putIncludedTargets(IResolvable|java.util.List<DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>>

---

##### `resetFullyRefreshIncrementalTablesEnabled` <a name="resetFullyRefreshIncrementalTablesEnabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetFullyRefreshIncrementalTablesEnabled"></a>

```java
public void resetFullyRefreshIncrementalTablesEnabled()
```

##### `resetIncludedTags` <a name="resetIncludedTags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTags"></a>

```java
public void resetIncludedTags()
```

##### `resetIncludedTargets` <a name="resetIncludedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTargets"></a>

```java
public void resetIncludedTargets()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetTransitiveDependenciesIncluded` <a name="resetTransitiveDependenciesIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependenciesIncluded"></a>

```java
public void resetTransitiveDependenciesIncluded()
```

##### `resetTransitiveDependentsIncluded` <a name="resetTransitiveDependentsIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependentsIncluded"></a>

```java
public void resetTransitiveDependentsIncluded()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargets">includedTargets</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabledInput">fullyRefreshIncrementalTablesEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTagsInput">includedTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargetsInput">includedTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncludedInput">transitiveDependenciesIncludedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncludedInput">transitiveDependentsIncludedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabled">fullyRefreshIncrementalTablesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTags">includedTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncluded">transitiveDependenciesIncluded</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncluded">transitiveDependentsIncluded</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includedTargets`<sup>Required</sup> <a name="includedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargets"></a>

```java
public DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList getIncludedTargets();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList</a>

---

##### `fullyRefreshIncrementalTablesEnabledInput`<sup>Optional</sup> <a name="fullyRefreshIncrementalTablesEnabledInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getFullyRefreshIncrementalTablesEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includedTagsInput`<sup>Optional</sup> <a name="includedTagsInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTagsInput"></a>

```java
public java.util.List<java.lang.String> getIncludedTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedTargetsInput`<sup>Optional</sup> <a name="includedTargetsInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargetsInput"></a>

```java
public IResolvable|java.util.List<DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets> getIncludedTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `transitiveDependenciesIncludedInput`<sup>Optional</sup> <a name="transitiveDependenciesIncludedInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncludedInput"></a>

```java
public java.lang.Boolean|IResolvable getTransitiveDependenciesIncludedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transitiveDependentsIncludedInput`<sup>Optional</sup> <a name="transitiveDependentsIncludedInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncludedInput"></a>

```java
public java.lang.Boolean|IResolvable getTransitiveDependentsIncludedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fullyRefreshIncrementalTablesEnabled`<sup>Required</sup> <a name="fullyRefreshIncrementalTablesEnabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFullyRefreshIncrementalTablesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includedTags`<sup>Required</sup> <a name="includedTags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTags"></a>

```java
public java.util.List<java.lang.String> getIncludedTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `transitiveDependenciesIncluded`<sup>Required</sup> <a name="transitiveDependenciesIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncluded"></a>

```java
public java.lang.Boolean|IResolvable getTransitiveDependenciesIncluded();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transitiveDependentsIncluded`<sup>Required</sup> <a name="transitiveDependentsIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncluded"></a>

```java
public java.lang.Boolean|IResolvable getTransitiveDependentsIncluded();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.internalValue"></a>

```java
public DataformRepositoryWorkflowConfigInvocationConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList;

new DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get"></a>

```java
public DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference;

new DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.internalValue"></a>

```java
public DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus</a>

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList;

new DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get"></a>

```java
public DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference;

new DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.errorStatus">errorStatus</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.executionTime">executionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.workflowInvocation">workflowInvocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorStatus`<sup>Required</sup> <a name="errorStatus" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.errorStatus"></a>

```java
public DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList getErrorStatus();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList</a>

---

##### `executionTime`<sup>Required</sup> <a name="executionTime" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.executionTime"></a>

```java
public java.lang.String getExecutionTime();
```

- *Type:* java.lang.String

---

##### `workflowInvocation`<sup>Required</sup> <a name="workflowInvocation" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.workflowInvocation"></a>

```java
public java.lang.String getWorkflowInvocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.internalValue"></a>

```java
public DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords</a>

---


### DataformRepositoryWorkflowConfigTimeoutsOutputReference <a name="DataformRepositoryWorkflowConfigTimeoutsOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataform_repository_workflow_config.DataformRepositoryWorkflowConfigTimeoutsOutputReference;

new DataformRepositoryWorkflowConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataformRepositoryWorkflowConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

---



