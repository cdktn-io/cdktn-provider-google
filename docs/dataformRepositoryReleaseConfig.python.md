# `dataformRepositoryReleaseConfig` Submodule <a name="`dataformRepositoryReleaseConfig` Submodule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataformRepositoryReleaseConfig <a name="DataformRepositoryReleaseConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config google_dataform_repository_release_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  git_commitish: str,
  name: str,
  code_compilation_config: DataformRepositoryReleaseConfigCodeCompilationConfig = None,
  cron_schedule: str = None,
  deletion_policy: str = None,
  disabled: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  region: str = None,
  repository: str = None,
  timeouts: DataformRepositoryReleaseConfigTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.gitCommitish">git_commitish</a></code> | <code>str</code> | Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The release's name. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.codeCompilationConfig">code_compilation_config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | code_compilation_config block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.cronSchedule">cron_schedule</a></code> | <code>str</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.region">region</a></code> | <code>str</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.repository">repository</a></code> | <code>str</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Optional. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `git_commitish`<sup>Required</sup> <a name="git_commitish" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.gitCommitish"></a>

- *Type:* str

Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#git_commitish DataformRepositoryReleaseConfig#git_commitish}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.name"></a>

- *Type:* str

The release's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#name DataformRepositoryReleaseConfig#name}

---

##### `code_compilation_config`<sup>Optional</sup> <a name="code_compilation_config" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.codeCompilationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

code_compilation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#code_compilation_config DataformRepositoryReleaseConfig#code_compilation_config}

---

##### `cron_schedule`<sup>Optional</sup> <a name="cron_schedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.cronSchedule"></a>

- *Type:* str

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#cron_schedule DataformRepositoryReleaseConfig#cron_schedule}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

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

- *Type:* bool | cdktn.IResolvable

Disables automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#disabled DataformRepositoryReleaseConfig#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.region"></a>

- *Type:* str

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#region DataformRepositoryReleaseConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.repository"></a>

- *Type:* str

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#repository DataformRepositoryReleaseConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#timeouts DataformRepositoryReleaseConfig#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.timeZone"></a>

- *Type:* str

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#time_zone DataformRepositoryReleaseConfig#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig">put_code_compilation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCodeCompilationConfig">reset_code_compilation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCronSchedule">reset_cron_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRepository">reset_repository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_code_compilation_config` <a name="put_code_compilation_config" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig"></a>

```python
def put_code_compilation_config(
  assertion_schema: str = None,
  database_suffix: str = None,
  default_database: str = None,
  default_location: str = None,
  default_schema: str = None,
  schema_suffix: str = None,
  table_prefix: str = None,
  vars: typing.Mapping[str] = None
) -> None
```

###### `assertion_schema`<sup>Optional</sup> <a name="assertion_schema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.assertionSchema"></a>

- *Type:* str

Optional. The default schema (BigQuery dataset ID) for assertions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#assertion_schema DataformRepositoryReleaseConfig#assertion_schema}

---

###### `database_suffix`<sup>Optional</sup> <a name="database_suffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.databaseSuffix"></a>

- *Type:* str

Optional. The suffix that should be appended to all database (Google Cloud project ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#database_suffix DataformRepositoryReleaseConfig#database_suffix}

---

###### `default_database`<sup>Optional</sup> <a name="default_database" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.defaultDatabase"></a>

- *Type:* str

Optional. The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_database DataformRepositoryReleaseConfig#default_database}

---

###### `default_location`<sup>Optional</sup> <a name="default_location" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.defaultLocation"></a>

- *Type:* str

Optional.

The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_location DataformRepositoryReleaseConfig#default_location}

---

###### `default_schema`<sup>Optional</sup> <a name="default_schema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.defaultSchema"></a>

- *Type:* str

Optional. The default schema (BigQuery dataset ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_schema DataformRepositoryReleaseConfig#default_schema}

---

###### `schema_suffix`<sup>Optional</sup> <a name="schema_suffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.schemaSuffix"></a>

- *Type:* str

Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#schema_suffix DataformRepositoryReleaseConfig#schema_suffix}

---

###### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.tablePrefix"></a>

- *Type:* str

Optional. The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#table_prefix DataformRepositoryReleaseConfig#table_prefix}

---

###### `vars`<sup>Optional</sup> <a name="vars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.vars"></a>

- *Type:* typing.Mapping[str]

Optional.

User-defined variables that are made available to project code during compilation.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#vars DataformRepositoryReleaseConfig#vars}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#create DataformRepositoryReleaseConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#delete DataformRepositoryReleaseConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#update DataformRepositoryReleaseConfig#update}.

---

##### `reset_code_compilation_config` <a name="reset_code_compilation_config" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCodeCompilationConfig"></a>

```python
def reset_code_compilation_config() -> None
```

##### `reset_cron_schedule` <a name="reset_cron_schedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCronSchedule"></a>

```python
def reset_cron_schedule() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRepository"></a>

```python
def reset_repository() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataformRepositoryReleaseConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataformRepositoryReleaseConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataformRepositoryReleaseConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataformRepositoryReleaseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataformRepositoryReleaseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfig">code_compilation_config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference">DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.recentScheduledReleaseRecords">recent_scheduled_release_records</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference">DataformRepositoryReleaseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfigInput">code_compilation_config_input</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronScheduleInput">cron_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitishInput">git_commitish_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronSchedule">cron_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitish">git_commitish</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `code_compilation_config`<sup>Required</sup> <a name="code_compilation_config" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfig"></a>

```python
code_compilation_config: DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference">DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference</a>

---

##### `recent_scheduled_release_records`<sup>Required</sup> <a name="recent_scheduled_release_records" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.recentScheduledReleaseRecords"></a>

```python
recent_scheduled_release_records: DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeouts"></a>

```python
timeouts: DataformRepositoryReleaseConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference">DataformRepositoryReleaseConfigTimeoutsOutputReference</a>

---

##### `code_compilation_config_input`<sup>Optional</sup> <a name="code_compilation_config_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfigInput"></a>

```python
code_compilation_config_input: DataformRepositoryReleaseConfigCodeCompilationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

---

##### `cron_schedule_input`<sup>Optional</sup> <a name="cron_schedule_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronScheduleInput"></a>

```python
cron_schedule_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `git_commitish_input`<sup>Optional</sup> <a name="git_commitish_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitishInput"></a>

```python
git_commitish_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataformRepositoryReleaseConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `cron_schedule`<sup>Required</sup> <a name="cron_schedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronSchedule"></a>

```python
cron_schedule: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `git_commitish`<sup>Required</sup> <a name="git_commitish" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitish"></a>

```python
git_commitish: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataformRepositoryReleaseConfigCodeCompilationConfig <a name="DataformRepositoryReleaseConfigCodeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig(
  assertion_schema: str = None,
  database_suffix: str = None,
  default_database: str = None,
  default_location: str = None,
  default_schema: str = None,
  schema_suffix: str = None,
  table_prefix: str = None,
  vars: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.assertionSchema">assertion_schema</a></code> | <code>str</code> | Optional. The default schema (BigQuery dataset ID) for assertions. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.databaseSuffix">database_suffix</a></code> | <code>str</code> | Optional. The suffix that should be appended to all database (Google Cloud project ID) names. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultDatabase">default_database</a></code> | <code>str</code> | Optional. The default database (Google Cloud project ID). |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultLocation">default_location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultSchema">default_schema</a></code> | <code>str</code> | Optional. The default schema (BigQuery dataset ID). |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.schemaSuffix">schema_suffix</a></code> | <code>str</code> | Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.tablePrefix">table_prefix</a></code> | <code>str</code> | Optional. The prefix that should be prepended to all table names. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.vars">vars</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `assertion_schema`<sup>Optional</sup> <a name="assertion_schema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.assertionSchema"></a>

```python
assertion_schema: str
```

- *Type:* str

Optional. The default schema (BigQuery dataset ID) for assertions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#assertion_schema DataformRepositoryReleaseConfig#assertion_schema}

---

##### `database_suffix`<sup>Optional</sup> <a name="database_suffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.databaseSuffix"></a>

```python
database_suffix: str
```

- *Type:* str

Optional. The suffix that should be appended to all database (Google Cloud project ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#database_suffix DataformRepositoryReleaseConfig#database_suffix}

---

##### `default_database`<sup>Optional</sup> <a name="default_database" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultDatabase"></a>

```python
default_database: str
```

- *Type:* str

Optional. The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_database DataformRepositoryReleaseConfig#default_database}

---

##### `default_location`<sup>Optional</sup> <a name="default_location" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultLocation"></a>

```python
default_location: str
```

- *Type:* str

Optional.

The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_location DataformRepositoryReleaseConfig#default_location}

---

##### `default_schema`<sup>Optional</sup> <a name="default_schema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultSchema"></a>

```python
default_schema: str
```

- *Type:* str

Optional. The default schema (BigQuery dataset ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_schema DataformRepositoryReleaseConfig#default_schema}

---

##### `schema_suffix`<sup>Optional</sup> <a name="schema_suffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.schemaSuffix"></a>

```python
schema_suffix: str
```

- *Type:* str

Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#schema_suffix DataformRepositoryReleaseConfig#schema_suffix}

---

##### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

Optional. The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#table_prefix DataformRepositoryReleaseConfig#table_prefix}

---

##### `vars`<sup>Optional</sup> <a name="vars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.vars"></a>

```python
vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

User-defined variables that are made available to project code during compilation.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#vars DataformRepositoryReleaseConfig#vars}

---

### DataformRepositoryReleaseConfigConfig <a name="DataformRepositoryReleaseConfigConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  git_commitish: str,
  name: str,
  code_compilation_config: DataformRepositoryReleaseConfigCodeCompilationConfig = None,
  cron_schedule: str = None,
  deletion_policy: str = None,
  disabled: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  region: str = None,
  repository: str = None,
  timeouts: DataformRepositoryReleaseConfigTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.gitCommitish">git_commitish</a></code> | <code>str</code> | Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.name">name</a></code> | <code>str</code> | The release's name. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.codeCompilationConfig">code_compilation_config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | code_compilation_config block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.cronSchedule">cron_schedule</a></code> | <code>str</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.region">region</a></code> | <code>str</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.repository">repository</a></code> | <code>str</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `git_commitish`<sup>Required</sup> <a name="git_commitish" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.gitCommitish"></a>

```python
git_commitish: str
```

- *Type:* str

Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#git_commitish DataformRepositoryReleaseConfig#git_commitish}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The release's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#name DataformRepositoryReleaseConfig#name}

---

##### `code_compilation_config`<sup>Optional</sup> <a name="code_compilation_config" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.codeCompilationConfig"></a>

```python
code_compilation_config: DataformRepositoryReleaseConfigCodeCompilationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

code_compilation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#code_compilation_config DataformRepositoryReleaseConfig#code_compilation_config}

---

##### `cron_schedule`<sup>Optional</sup> <a name="cron_schedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.cronSchedule"></a>

```python
cron_schedule: str
```

- *Type:* str

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#cron_schedule DataformRepositoryReleaseConfig#cron_schedule}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#deletion_policy DataformRepositoryReleaseConfig#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disables automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#disabled DataformRepositoryReleaseConfig#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.region"></a>

```python
region: str
```

- *Type:* str

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#region DataformRepositoryReleaseConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#repository DataformRepositoryReleaseConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeouts"></a>

```python
timeouts: DataformRepositoryReleaseConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#timeouts DataformRepositoryReleaseConfig#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#time_zone DataformRepositoryReleaseConfig#time_zone}

---

### DataformRepositoryReleaseConfigRecentScheduledReleaseRecords <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecords" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords()
```


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus()
```


### DataformRepositoryReleaseConfigTimeouts <a name="DataformRepositoryReleaseConfigTimeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#create DataformRepositoryReleaseConfig#create}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#delete DataformRepositoryReleaseConfig#delete}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#update DataformRepositoryReleaseConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#create DataformRepositoryReleaseConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#delete DataformRepositoryReleaseConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#update DataformRepositoryReleaseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference <a name="DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetAssertionSchema">reset_assertion_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDatabaseSuffix">reset_database_suffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultDatabase">reset_default_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultLocation">reset_default_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultSchema">reset_default_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetSchemaSuffix">reset_schema_suffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetTablePrefix">reset_table_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetVars">reset_vars</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assertion_schema` <a name="reset_assertion_schema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetAssertionSchema"></a>

```python
def reset_assertion_schema() -> None
```

##### `reset_database_suffix` <a name="reset_database_suffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDatabaseSuffix"></a>

```python
def reset_database_suffix() -> None
```

##### `reset_default_database` <a name="reset_default_database" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultDatabase"></a>

```python
def reset_default_database() -> None
```

##### `reset_default_location` <a name="reset_default_location" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultLocation"></a>

```python
def reset_default_location() -> None
```

##### `reset_default_schema` <a name="reset_default_schema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultSchema"></a>

```python
def reset_default_schema() -> None
```

##### `reset_schema_suffix` <a name="reset_schema_suffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetSchemaSuffix"></a>

```python
def reset_schema_suffix() -> None
```

##### `reset_table_prefix` <a name="reset_table_prefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetTablePrefix"></a>

```python
def reset_table_prefix() -> None
```

##### `reset_vars` <a name="reset_vars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetVars"></a>

```python
def reset_vars() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchemaInput">assertion_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffixInput">database_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabaseInput">default_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocationInput">default_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchemaInput">default_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffixInput">schema_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefixInput">table_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.varsInput">vars_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchema">assertion_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffix">database_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabase">default_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocation">default_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchema">default_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffix">schema_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefix">table_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.vars">vars</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assertion_schema_input`<sup>Optional</sup> <a name="assertion_schema_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchemaInput"></a>

```python
assertion_schema_input: str
```

- *Type:* str

---

##### `database_suffix_input`<sup>Optional</sup> <a name="database_suffix_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffixInput"></a>

```python
database_suffix_input: str
```

- *Type:* str

---

##### `default_database_input`<sup>Optional</sup> <a name="default_database_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabaseInput"></a>

```python
default_database_input: str
```

- *Type:* str

---

##### `default_location_input`<sup>Optional</sup> <a name="default_location_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocationInput"></a>

```python
default_location_input: str
```

- *Type:* str

---

##### `default_schema_input`<sup>Optional</sup> <a name="default_schema_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchemaInput"></a>

```python
default_schema_input: str
```

- *Type:* str

---

##### `schema_suffix_input`<sup>Optional</sup> <a name="schema_suffix_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffixInput"></a>

```python
schema_suffix_input: str
```

- *Type:* str

---

##### `table_prefix_input`<sup>Optional</sup> <a name="table_prefix_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefixInput"></a>

```python
table_prefix_input: str
```

- *Type:* str

---

##### `vars_input`<sup>Optional</sup> <a name="vars_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.varsInput"></a>

```python
vars_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `assertion_schema`<sup>Required</sup> <a name="assertion_schema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchema"></a>

```python
assertion_schema: str
```

- *Type:* str

---

##### `database_suffix`<sup>Required</sup> <a name="database_suffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffix"></a>

```python
database_suffix: str
```

- *Type:* str

---

##### `default_database`<sup>Required</sup> <a name="default_database" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabase"></a>

```python
default_database: str
```

- *Type:* str

---

##### `default_location`<sup>Required</sup> <a name="default_location" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocation"></a>

```python
default_location: str
```

- *Type:* str

---

##### `default_schema`<sup>Required</sup> <a name="default_schema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchema"></a>

```python
default_schema: str
```

- *Type:* str

---

##### `schema_suffix`<sup>Required</sup> <a name="schema_suffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffix"></a>

```python
schema_suffix: str
```

- *Type:* str

---

##### `table_prefix`<sup>Required</sup> <a name="table_prefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

---

##### `vars`<sup>Required</sup> <a name="vars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.vars"></a>

```python
vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataformRepositoryReleaseConfigCodeCompilationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus</a>

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.compilationResult">compilation_result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.errorStatus">error_status</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.releaseTime">release_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords">DataformRepositoryReleaseConfigRecentScheduledReleaseRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compilation_result`<sup>Required</sup> <a name="compilation_result" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.compilationResult"></a>

```python
compilation_result: str
```

- *Type:* str

---

##### `error_status`<sup>Required</sup> <a name="error_status" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.errorStatus"></a>

```python
error_status: DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList</a>

---

##### `release_time`<sup>Required</sup> <a name="release_time" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.releaseTime"></a>

```python
release_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.internalValue"></a>

```python
internal_value: DataformRepositoryReleaseConfigRecentScheduledReleaseRecords
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords">DataformRepositoryReleaseConfigRecentScheduledReleaseRecords</a>

---


### DataformRepositoryReleaseConfigTimeoutsOutputReference <a name="DataformRepositoryReleaseConfigTimeoutsOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_release_config

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataformRepositoryReleaseConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

---



