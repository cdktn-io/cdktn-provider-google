# `dataformRepositoryWorkflowConfig` Submodule <a name="`dataformRepositoryWorkflowConfig` Submodule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataformRepositoryWorkflowConfig <a name="DataformRepositoryWorkflowConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config google_dataform_repository_workflow_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  release_config: str,
  cron_schedule: str = None,
  deletion_policy: str = None,
  disabled: bool | IResolvable = None,
  id: str = None,
  invocation_config: DataformRepositoryWorkflowConfigInvocationConfig = None,
  project: str = None,
  region: str = None,
  repository: str = None,
  timeouts: DataformRepositoryWorkflowConfigTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The workflow's name. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.releaseConfig">release_config</a></code> | <code>str</code> | The name of the release config whose releaseCompilationResult should be executed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.cronSchedule">cron_schedule</a></code> | <code>str</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables automatic creation of workflow invocations. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#id DataformRepositoryWorkflowConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.invocationConfig">invocation_config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | invocation_config block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#project DataformRepositoryWorkflowConfig#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.region">region</a></code> | <code>str</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.repository">repository</a></code> | <code>str</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Optional. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.name"></a>

- *Type:* str

The workflow's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#name DataformRepositoryWorkflowConfig#name}

---

##### `release_config`<sup>Required</sup> <a name="release_config" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.releaseConfig"></a>

- *Type:* str

The name of the release config whose releaseCompilationResult should be executed.

Must be in the format projects/* /locations/* /repositories/* /releaseConfigs/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#release_config DataformRepositoryWorkflowConfig#release_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `cron_schedule`<sup>Optional</sup> <a name="cron_schedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.cronSchedule"></a>

- *Type:* str

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#cron_schedule DataformRepositoryWorkflowConfig#cron_schedule}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

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

- *Type:* bool | cdktn.IResolvable

Disables automatic creation of workflow invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#disabled DataformRepositoryWorkflowConfig#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#id DataformRepositoryWorkflowConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invocation_config`<sup>Optional</sup> <a name="invocation_config" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.invocationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

invocation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#invocation_config DataformRepositoryWorkflowConfig#invocation_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#project DataformRepositoryWorkflowConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.region"></a>

- *Type:* str

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#region DataformRepositoryWorkflowConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.repository"></a>

- *Type:* str

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#repository DataformRepositoryWorkflowConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#timeouts DataformRepositoryWorkflowConfig#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.timeZone"></a>

- *Type:* str

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#time_zone DataformRepositoryWorkflowConfig#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig">put_invocation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetCronSchedule">reset_cron_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetInvocationConfig">reset_invocation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRepository">reset_repository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_invocation_config` <a name="put_invocation_config" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig"></a>

```python
def put_invocation_config(
  fully_refresh_incremental_tables_enabled: bool | IResolvable = None,
  included_tags: typing.List[str] = None,
  included_targets: IResolvable | typing.List[DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets] = None,
  service_account: str = None,
  transitive_dependencies_included: bool | IResolvable = None,
  transitive_dependents_included: bool | IResolvable = None
) -> None
```

###### `fully_refresh_incremental_tables_enabled`<sup>Optional</sup> <a name="fully_refresh_incremental_tables_enabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig.parameter.fullyRefreshIncrementalTablesEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Optional. When set to true, any incremental tables will be fully refreshed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#fully_refresh_incremental_tables_enabled DataformRepositoryWorkflowConfig#fully_refresh_incremental_tables_enabled}

---

###### `included_tags`<sup>Optional</sup> <a name="included_tags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig.parameter.includedTags"></a>

- *Type:* typing.List[str]

Optional. The set of tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#included_tags DataformRepositoryWorkflowConfig#included_tags}

---

###### `included_targets`<sup>Optional</sup> <a name="included_targets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig.parameter.includedTargets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>]

included_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#included_targets DataformRepositoryWorkflowConfig#included_targets}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig.parameter.serviceAccount"></a>

- *Type:* str

Optional. The service account to run workflow invocations under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#service_account DataformRepositoryWorkflowConfig#service_account}

---

###### `transitive_dependencies_included`<sup>Optional</sup> <a name="transitive_dependencies_included" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig.parameter.transitiveDependenciesIncluded"></a>

- *Type:* bool | cdktn.IResolvable

Optional. When set to true, transitive dependencies of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#transitive_dependencies_included DataformRepositoryWorkflowConfig#transitive_dependencies_included}

---

###### `transitive_dependents_included`<sup>Optional</sup> <a name="transitive_dependents_included" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig.parameter.transitiveDependentsIncluded"></a>

- *Type:* bool | cdktn.IResolvable

Optional. When set to true, transitive dependents of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#transitive_dependents_included DataformRepositoryWorkflowConfig#transitive_dependents_included}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#create DataformRepositoryWorkflowConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#delete DataformRepositoryWorkflowConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#update DataformRepositoryWorkflowConfig#update}.

---

##### `reset_cron_schedule` <a name="reset_cron_schedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetCronSchedule"></a>

```python
def reset_cron_schedule() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_invocation_config` <a name="reset_invocation_config" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetInvocationConfig"></a>

```python
def reset_invocation_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRepository"></a>

```python
def reset_repository() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataformRepositoryWorkflowConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isConstruct"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataformRepositoryWorkflowConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataformRepositoryWorkflowConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataformRepositoryWorkflowConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataformRepositoryWorkflowConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfig">invocation_config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference">DataformRepositoryWorkflowConfigInvocationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.recentScheduledExecutionRecords">recent_scheduled_execution_records</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference">DataformRepositoryWorkflowConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronScheduleInput">cron_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfigInput">invocation_config_input</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfigInput">release_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronSchedule">cron_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfig">release_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `invocation_config`<sup>Required</sup> <a name="invocation_config" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfig"></a>

```python
invocation_config: DataformRepositoryWorkflowConfigInvocationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference">DataformRepositoryWorkflowConfigInvocationConfigOutputReference</a>

---

##### `recent_scheduled_execution_records`<sup>Required</sup> <a name="recent_scheduled_execution_records" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.recentScheduledExecutionRecords"></a>

```python
recent_scheduled_execution_records: DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeouts"></a>

```python
timeouts: DataformRepositoryWorkflowConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference">DataformRepositoryWorkflowConfigTimeoutsOutputReference</a>

---

##### `cron_schedule_input`<sup>Optional</sup> <a name="cron_schedule_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronScheduleInput"></a>

```python
cron_schedule_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `invocation_config_input`<sup>Optional</sup> <a name="invocation_config_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfigInput"></a>

```python
invocation_config_input: DataformRepositoryWorkflowConfigInvocationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `release_config_input`<sup>Optional</sup> <a name="release_config_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfigInput"></a>

```python
release_config_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataformRepositoryWorkflowConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `cron_schedule`<sup>Required</sup> <a name="cron_schedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronSchedule"></a>

```python
cron_schedule: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `release_config`<sup>Required</sup> <a name="release_config" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfig"></a>

```python
release_config: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataformRepositoryWorkflowConfigConfig <a name="DataformRepositoryWorkflowConfigConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  release_config: str,
  cron_schedule: str = None,
  deletion_policy: str = None,
  disabled: bool | IResolvable = None,
  id: str = None,
  invocation_config: DataformRepositoryWorkflowConfigInvocationConfig = None,
  project: str = None,
  region: str = None,
  repository: str = None,
  timeouts: DataformRepositoryWorkflowConfigTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.name">name</a></code> | <code>str</code> | The workflow's name. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.releaseConfig">release_config</a></code> | <code>str</code> | The name of the release config whose releaseCompilationResult should be executed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.cronSchedule">cron_schedule</a></code> | <code>str</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables automatic creation of workflow invocations. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#id DataformRepositoryWorkflowConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.invocationConfig">invocation_config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | invocation_config block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#project DataformRepositoryWorkflowConfig#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.region">region</a></code> | <code>str</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.repository">repository</a></code> | <code>str</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The workflow's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#name DataformRepositoryWorkflowConfig#name}

---

##### `release_config`<sup>Required</sup> <a name="release_config" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.releaseConfig"></a>

```python
release_config: str
```

- *Type:* str

The name of the release config whose releaseCompilationResult should be executed.

Must be in the format projects/* /locations/* /repositories/* /releaseConfigs/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#release_config DataformRepositoryWorkflowConfig#release_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `cron_schedule`<sup>Optional</sup> <a name="cron_schedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.cronSchedule"></a>

```python
cron_schedule: str
```

- *Type:* str

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#cron_schedule DataformRepositoryWorkflowConfig#cron_schedule}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

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

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disables automatic creation of workflow invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#disabled DataformRepositoryWorkflowConfig#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#id DataformRepositoryWorkflowConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invocation_config`<sup>Optional</sup> <a name="invocation_config" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.invocationConfig"></a>

```python
invocation_config: DataformRepositoryWorkflowConfigInvocationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

invocation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#invocation_config DataformRepositoryWorkflowConfig#invocation_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#project DataformRepositoryWorkflowConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.region"></a>

```python
region: str
```

- *Type:* str

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#region DataformRepositoryWorkflowConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#repository DataformRepositoryWorkflowConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeouts"></a>

```python
timeouts: DataformRepositoryWorkflowConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#timeouts DataformRepositoryWorkflowConfig#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#time_zone DataformRepositoryWorkflowConfig#time_zone}

---

### DataformRepositoryWorkflowConfigInvocationConfig <a name="DataformRepositoryWorkflowConfigInvocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig(
  fully_refresh_incremental_tables_enabled: bool | IResolvable = None,
  included_tags: typing.List[str] = None,
  included_targets: IResolvable | typing.List[DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets] = None,
  service_account: str = None,
  transitive_dependencies_included: bool | IResolvable = None,
  transitive_dependents_included: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.fullyRefreshIncrementalTablesEnabled">fully_refresh_incremental_tables_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Optional. When set to true, any incremental tables will be fully refreshed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTags">included_tags</a></code> | <code>typing.List[str]</code> | Optional. The set of tags to include. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTargets">included_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>]</code> | included_targets block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Optional. The service account to run workflow invocations under. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependenciesIncluded">transitive_dependencies_included</a></code> | <code>bool \| cdktn.IResolvable</code> | Optional. When set to true, transitive dependencies of included actions will be executed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependentsIncluded">transitive_dependents_included</a></code> | <code>bool \| cdktn.IResolvable</code> | Optional. When set to true, transitive dependents of included actions will be executed. |

---

##### `fully_refresh_incremental_tables_enabled`<sup>Optional</sup> <a name="fully_refresh_incremental_tables_enabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.fullyRefreshIncrementalTablesEnabled"></a>

```python
fully_refresh_incremental_tables_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Optional. When set to true, any incremental tables will be fully refreshed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#fully_refresh_incremental_tables_enabled DataformRepositoryWorkflowConfig#fully_refresh_incremental_tables_enabled}

---

##### `included_tags`<sup>Optional</sup> <a name="included_tags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTags"></a>

```python
included_tags: typing.List[str]
```

- *Type:* typing.List[str]

Optional. The set of tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#included_tags DataformRepositoryWorkflowConfig#included_tags}

---

##### `included_targets`<sup>Optional</sup> <a name="included_targets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTargets"></a>

```python
included_targets: IResolvable | typing.List[DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>]

included_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#included_targets DataformRepositoryWorkflowConfig#included_targets}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Optional. The service account to run workflow invocations under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#service_account DataformRepositoryWorkflowConfig#service_account}

---

##### `transitive_dependencies_included`<sup>Optional</sup> <a name="transitive_dependencies_included" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependenciesIncluded"></a>

```python
transitive_dependencies_included: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Optional. When set to true, transitive dependencies of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#transitive_dependencies_included DataformRepositoryWorkflowConfig#transitive_dependencies_included}

---

##### `transitive_dependents_included`<sup>Optional</sup> <a name="transitive_dependents_included" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependentsIncluded"></a>

```python
transitive_dependents_included: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Optional. When set to true, transitive dependents of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#transitive_dependents_included DataformRepositoryWorkflowConfig#transitive_dependents_included}

---

### DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets <a name="DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets(
  database: str = None,
  name: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.database">database</a></code> | <code>str</code> | The action's database (Google Cloud project ID). |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.name">name</a></code> | <code>str</code> | The action's name, within database and schema. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.schema">schema</a></code> | <code>str</code> | The action's schema (BigQuery dataset ID), within database. |

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.database"></a>

```python
database: str
```

- *Type:* str

The action's database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#database DataformRepositoryWorkflowConfig#database}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.name"></a>

```python
name: str
```

- *Type:* str

The action's name, within database and schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#name DataformRepositoryWorkflowConfig#name}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.schema"></a>

```python
schema: str
```

- *Type:* str

The action's schema (BigQuery dataset ID), within database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#schema DataformRepositoryWorkflowConfig#schema}

---

### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords()
```


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus()
```


### DataformRepositoryWorkflowConfigTimeouts <a name="DataformRepositoryWorkflowConfigTimeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#create DataformRepositoryWorkflowConfig#create}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#delete DataformRepositoryWorkflowConfig#delete}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#update DataformRepositoryWorkflowConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#create DataformRepositoryWorkflowConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#delete DataformRepositoryWorkflowConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#update DataformRepositoryWorkflowConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList <a name="DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>]

---


### DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference <a name="DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database` <a name="reset_database" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>

---


### DataformRepositoryWorkflowConfigInvocationConfigOutputReference <a name="DataformRepositoryWorkflowConfigInvocationConfigOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets">put_included_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetFullyRefreshIncrementalTablesEnabled">reset_fully_refresh_incremental_tables_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTags">reset_included_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTargets">reset_included_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependenciesIncluded">reset_transitive_dependencies_included</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependentsIncluded">reset_transitive_dependents_included</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_included_targets` <a name="put_included_targets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets"></a>

```python
def put_included_targets(
  value: IResolvable | typing.List[DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>]

---

##### `reset_fully_refresh_incremental_tables_enabled` <a name="reset_fully_refresh_incremental_tables_enabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetFullyRefreshIncrementalTablesEnabled"></a>

```python
def reset_fully_refresh_incremental_tables_enabled() -> None
```

##### `reset_included_tags` <a name="reset_included_tags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTags"></a>

```python
def reset_included_tags() -> None
```

##### `reset_included_targets` <a name="reset_included_targets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTargets"></a>

```python
def reset_included_targets() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_transitive_dependencies_included` <a name="reset_transitive_dependencies_included" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependenciesIncluded"></a>

```python
def reset_transitive_dependencies_included() -> None
```

##### `reset_transitive_dependents_included` <a name="reset_transitive_dependents_included" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependentsIncluded"></a>

```python
def reset_transitive_dependents_included() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargets">included_targets</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabledInput">fully_refresh_incremental_tables_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTagsInput">included_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargetsInput">included_targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncludedInput">transitive_dependencies_included_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncludedInput">transitive_dependents_included_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabled">fully_refresh_incremental_tables_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTags">included_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncluded">transitive_dependencies_included</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncluded">transitive_dependents_included</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `included_targets`<sup>Required</sup> <a name="included_targets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargets"></a>

```python
included_targets: DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList</a>

---

##### `fully_refresh_incremental_tables_enabled_input`<sup>Optional</sup> <a name="fully_refresh_incremental_tables_enabled_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabledInput"></a>

```python
fully_refresh_incremental_tables_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `included_tags_input`<sup>Optional</sup> <a name="included_tags_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTagsInput"></a>

```python
included_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_targets_input`<sup>Optional</sup> <a name="included_targets_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargetsInput"></a>

```python
included_targets_input: IResolvable | typing.List[DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `transitive_dependencies_included_input`<sup>Optional</sup> <a name="transitive_dependencies_included_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncludedInput"></a>

```python
transitive_dependencies_included_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `transitive_dependents_included_input`<sup>Optional</sup> <a name="transitive_dependents_included_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncludedInput"></a>

```python
transitive_dependents_included_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fully_refresh_incremental_tables_enabled`<sup>Required</sup> <a name="fully_refresh_incremental_tables_enabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabled"></a>

```python
fully_refresh_incremental_tables_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `included_tags`<sup>Required</sup> <a name="included_tags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTags"></a>

```python
included_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `transitive_dependencies_included`<sup>Required</sup> <a name="transitive_dependencies_included" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncluded"></a>

```python
transitive_dependencies_included: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `transitive_dependents_included`<sup>Required</sup> <a name="transitive_dependents_included" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncluded"></a>

```python
transitive_dependents_included: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataformRepositoryWorkflowConfigInvocationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus</a>

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.errorStatus">error_status</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.executionTime">execution_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.workflowInvocation">workflow_invocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_status`<sup>Required</sup> <a name="error_status" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.errorStatus"></a>

```python
error_status: DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList</a>

---

##### `execution_time`<sup>Required</sup> <a name="execution_time" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.executionTime"></a>

```python
execution_time: str
```

- *Type:* str

---

##### `workflow_invocation`<sup>Required</sup> <a name="workflow_invocation" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.workflowInvocation"></a>

```python
workflow_invocation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.internalValue"></a>

```python
internal_value: DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords</a>

---


### DataformRepositoryWorkflowConfigTimeoutsOutputReference <a name="DataformRepositoryWorkflowConfigTimeoutsOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_workflow_config

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataformRepositoryWorkflowConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

---



