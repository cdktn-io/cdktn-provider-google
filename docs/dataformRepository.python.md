# `dataformRepository` Submodule <a name="`dataformRepository` Submodule" id="@cdktn/provider-google.dataformRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataformRepository <a name="DataformRepository" id="@cdktn/provider-google.dataformRepository.DataformRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository google_dataform_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepository(
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
  deletion_policy: str = None,
  display_name: str = None,
  git_remote_settings: DataformRepositoryGitRemoteSettings = None,
  id: str = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  npmrc_environment_variables_secret_version: str = None,
  project: str = None,
  region: str = None,
  service_account: str = None,
  timeouts: DataformRepositoryTimeouts = None,
  workspace_compilation_overrides: DataformRepositoryWorkspaceCompilationOverrides = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.name">name</a></code> | <code>str</code> | The repository's name. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/dataform_repository.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. The repository's user-friendly name. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.gitRemoteSettings">git_remote_settings</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a></code> | git_remote_settings block. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#id DataformRepository#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.npmrcEnvironmentVariablesSecretVersion">npmrc_environment_variables_secret_version</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#project DataformRepository#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.region">region</a></code> | <code>str</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The service account to run workflow invocations under. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts">DataformRepositoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.workspaceCompilationOverrides">workspace_compilation_overrides</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a></code> | workspace_compilation_overrides block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.name"></a>

- *Type:* str

The repository's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#name DataformRepository#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/dataform_repository.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#deletion_policy DataformRepository#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. The repository's user-friendly name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#display_name DataformRepository#display_name}

---

##### `git_remote_settings`<sup>Optional</sup> <a name="git_remote_settings" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.gitRemoteSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a>

git_remote_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#git_remote_settings DataformRepository#git_remote_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#id DataformRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

Optional.

The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources.
It is not possible to add or update the encryption key after the repository is created. Example projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#kms_key_name DataformRepository#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional.

Repository user labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#labels DataformRepository#labels}

---

##### `npmrc_environment_variables_secret_version`<sup>Optional</sup> <a name="npmrc_environment_variables_secret_version" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.npmrcEnvironmentVariablesSecretVersion"></a>

- *Type:* str

Optional.

The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format projects/* /secrets/* /versions/*. The file itself must be in a JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#npmrc_environment_variables_secret_version DataformRepository#npmrc_environment_variables_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#project DataformRepository#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.region"></a>

- *Type:* str

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#region DataformRepository#region}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The service account to run workflow invocations under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#service_account DataformRepository#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts">DataformRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#timeouts DataformRepository#timeouts}

---

##### `workspace_compilation_overrides`<sup>Optional</sup> <a name="workspace_compilation_overrides" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.workspaceCompilationOverrides"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a>

workspace_compilation_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#workspace_compilation_overrides DataformRepository#workspace_compilation_overrides}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.putGitRemoteSettings">put_git_remote_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.putWorkspaceCompilationOverrides">put_workspace_compilation_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetGitRemoteSettings">reset_git_remote_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetNpmrcEnvironmentVariablesSecretVersion">reset_npmrc_environment_variables_secret_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetWorkspaceCompilationOverrides">reset_workspace_compilation_overrides</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepository.DataformRepository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataformRepository.DataformRepository.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataformRepository.DataformRepository.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataformRepository.DataformRepository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataformRepository.DataformRepository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepository.DataformRepository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataformRepository.DataformRepository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataformRepository.DataformRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataformRepository.DataformRepository.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataformRepository.DataformRepository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataformRepository.DataformRepository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dataformRepository.DataformRepository.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataformRepository.DataformRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dataformRepository.DataformRepository.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dataformRepository.DataformRepository.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepository.DataformRepository.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepository.DataformRepository.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_git_remote_settings` <a name="put_git_remote_settings" id="@cdktn/provider-google.dataformRepository.DataformRepository.putGitRemoteSettings"></a>

```python
def put_git_remote_settings(
  default_branch: str,
  url: str,
  authentication_token_secret_version: str = None,
  git_repository_link: str = None,
  ssh_authentication_config: DataformRepositoryGitRemoteSettingsSshAuthenticationConfig = None
) -> None
```

###### `default_branch`<sup>Required</sup> <a name="default_branch" id="@cdktn/provider-google.dataformRepository.DataformRepository.putGitRemoteSettings.parameter.defaultBranch"></a>

- *Type:* str

The Git remote's default branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#default_branch DataformRepository#default_branch}

---

###### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.dataformRepository.DataformRepository.putGitRemoteSettings.parameter.url"></a>

- *Type:* str

The Git remote's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#url DataformRepository#url}

---

###### `authentication_token_secret_version`<sup>Optional</sup> <a name="authentication_token_secret_version" id="@cdktn/provider-google.dataformRepository.DataformRepository.putGitRemoteSettings.parameter.authenticationTokenSecretVersion"></a>

- *Type:* str

The name of the Secret Manager secret version to use as an authentication token for Git operations.

This secret is for assigning with HTTPS only(for SSH use 'ssh_authentication_config'). Must be in the format projects/* /secrets/* /versions/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#authentication_token_secret_version DataformRepository#authentication_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

###### `git_repository_link`<sup>Optional</sup> <a name="git_repository_link" id="@cdktn/provider-google.dataformRepository.DataformRepository.putGitRemoteSettings.parameter.gitRepositoryLink"></a>

- *Type:* str

The name of the Developer Connect GitRepositoryLink to use for machine credentials.

Must be in the format projects/* /locations/* /connections/* /gitRepositoryLinks/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#git_repository_link DataformRepository#git_repository_link}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

###### `ssh_authentication_config`<sup>Optional</sup> <a name="ssh_authentication_config" id="@cdktn/provider-google.dataformRepository.DataformRepository.putGitRemoteSettings.parameter.sshAuthenticationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a>

ssh_authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#ssh_authentication_config DataformRepository#ssh_authentication_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dataformRepository.DataformRepository.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataformRepository.DataformRepository.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#create DataformRepository#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataformRepository.DataformRepository.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#delete DataformRepository#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataformRepository.DataformRepository.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#update DataformRepository#update}.

---

##### `put_workspace_compilation_overrides` <a name="put_workspace_compilation_overrides" id="@cdktn/provider-google.dataformRepository.DataformRepository.putWorkspaceCompilationOverrides"></a>

```python
def put_workspace_compilation_overrides(
  default_database: str = None,
  schema_suffix: str = None,
  table_prefix: str = None
) -> None
```

###### `default_database`<sup>Optional</sup> <a name="default_database" id="@cdktn/provider-google.dataformRepository.DataformRepository.putWorkspaceCompilationOverrides.parameter.defaultDatabase"></a>

- *Type:* str

The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#default_database DataformRepository#default_database}

---

###### `schema_suffix`<sup>Optional</sup> <a name="schema_suffix" id="@cdktn/provider-google.dataformRepository.DataformRepository.putWorkspaceCompilationOverrides.parameter.schemaSuffix"></a>

- *Type:* str

The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#schema_suffix DataformRepository#schema_suffix}

---

###### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktn/provider-google.dataformRepository.DataformRepository.putWorkspaceCompilationOverrides.parameter.tablePrefix"></a>

- *Type:* str

The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#table_prefix DataformRepository#table_prefix}

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_git_remote_settings` <a name="reset_git_remote_settings" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetGitRemoteSettings"></a>

```python
def reset_git_remote_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_npmrc_environment_variables_secret_version` <a name="reset_npmrc_environment_variables_secret_version" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetNpmrcEnvironmentVariablesSecretVersion"></a>

```python
def reset_npmrc_environment_variables_secret_version() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_workspace_compilation_overrides` <a name="reset_workspace_compilation_overrides" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetWorkspaceCompilationOverrides"></a>

```python
def reset_workspace_compilation_overrides() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataformRepository resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataformRepository.DataformRepository.isConstruct"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepository.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepository.DataformRepository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataformRepository.DataformRepository.isTerraformElement"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepository.DataformRepository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dataformRepository.DataformRepository.isTerraformResource"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepository.DataformRepository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataformRepository.DataformRepository.generateConfigForImport"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepository.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataformRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepository.DataformRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataformRepository.DataformRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataformRepository to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataformRepository.DataformRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataformRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepository.DataformRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataformRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.gitRemoteSettings">git_remote_settings</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference">DataformRepositoryGitRemoteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference">DataformRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.workspaceCompilationOverrides">workspace_compilation_overrides</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference">DataformRepositoryWorkspaceCompilationOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.gitRemoteSettingsInput">git_remote_settings_input</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.npmrcEnvironmentVariablesSecretVersionInput">npmrc_environment_variables_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts">DataformRepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.workspaceCompilationOverridesInput">workspace_compilation_overrides_input</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.npmrcEnvironmentVariablesSecretVersion">npmrc_environment_variables_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `git_remote_settings`<sup>Required</sup> <a name="git_remote_settings" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.gitRemoteSettings"></a>

```python
git_remote_settings: DataformRepositoryGitRemoteSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference">DataformRepositoryGitRemoteSettingsOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.timeouts"></a>

```python
timeouts: DataformRepositoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference">DataformRepositoryTimeoutsOutputReference</a>

---

##### `workspace_compilation_overrides`<sup>Required</sup> <a name="workspace_compilation_overrides" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.workspaceCompilationOverrides"></a>

```python
workspace_compilation_overrides: DataformRepositoryWorkspaceCompilationOverridesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference">DataformRepositoryWorkspaceCompilationOverridesOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `git_remote_settings_input`<sup>Optional</sup> <a name="git_remote_settings_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.gitRemoteSettingsInput"></a>

```python
git_remote_settings_input: DataformRepositoryGitRemoteSettings
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `npmrc_environment_variables_secret_version_input`<sup>Optional</sup> <a name="npmrc_environment_variables_secret_version_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.npmrcEnvironmentVariablesSecretVersionInput"></a>

```python
npmrc_environment_variables_secret_version_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataformRepositoryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts">DataformRepositoryTimeouts</a>

---

##### `workspace_compilation_overrides_input`<sup>Optional</sup> <a name="workspace_compilation_overrides_input" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.workspaceCompilationOverridesInput"></a>

```python
workspace_compilation_overrides_input: DataformRepositoryWorkspaceCompilationOverrides
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `npmrc_environment_variables_secret_version`<sup>Required</sup> <a name="npmrc_environment_variables_secret_version" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.npmrcEnvironmentVariablesSecretVersion"></a>

```python
npmrc_environment_variables_secret_version: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataformRepositoryConfig <a name="DataformRepositoryConfig" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepositoryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  deletion_policy: str = None,
  display_name: str = None,
  git_remote_settings: DataformRepositoryGitRemoteSettings = None,
  id: str = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  npmrc_environment_variables_secret_version: str = None,
  project: str = None,
  region: str = None,
  service_account: str = None,
  timeouts: DataformRepositoryTimeouts = None,
  workspace_compilation_overrides: DataformRepositoryWorkspaceCompilationOverrides = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.name">name</a></code> | <code>str</code> | The repository's name. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/dataform_repository.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. The repository's user-friendly name. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.gitRemoteSettings">git_remote_settings</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a></code> | git_remote_settings block. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#id DataformRepository#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.npmrcEnvironmentVariablesSecretVersion">npmrc_environment_variables_secret_version</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#project DataformRepository#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.region">region</a></code> | <code>str</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The service account to run workflow invocations under. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts">DataformRepositoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.workspaceCompilationOverrides">workspace_compilation_overrides</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a></code> | workspace_compilation_overrides block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The repository's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#name DataformRepository#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/dataform_repository.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#deletion_policy DataformRepository#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. The repository's user-friendly name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#display_name DataformRepository#display_name}

---

##### `git_remote_settings`<sup>Optional</sup> <a name="git_remote_settings" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.gitRemoteSettings"></a>

```python
git_remote_settings: DataformRepositoryGitRemoteSettings
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a>

git_remote_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#git_remote_settings DataformRepository#git_remote_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#id DataformRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Optional.

The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources.
It is not possible to add or update the encryption key after the repository is created. Example projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#kms_key_name DataformRepository#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Repository user labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#labels DataformRepository#labels}

---

##### `npmrc_environment_variables_secret_version`<sup>Optional</sup> <a name="npmrc_environment_variables_secret_version" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.npmrcEnvironmentVariablesSecretVersion"></a>

```python
npmrc_environment_variables_secret_version: str
```

- *Type:* str

Optional.

The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format projects/* /secrets/* /versions/*. The file itself must be in a JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#npmrc_environment_variables_secret_version DataformRepository#npmrc_environment_variables_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#project DataformRepository#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.region"></a>

```python
region: str
```

- *Type:* str

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#region DataformRepository#region}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The service account to run workflow invocations under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#service_account DataformRepository#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.timeouts"></a>

```python
timeouts: DataformRepositoryTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts">DataformRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#timeouts DataformRepository#timeouts}

---

##### `workspace_compilation_overrides`<sup>Optional</sup> <a name="workspace_compilation_overrides" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.workspaceCompilationOverrides"></a>

```python
workspace_compilation_overrides: DataformRepositoryWorkspaceCompilationOverrides
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a>

workspace_compilation_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#workspace_compilation_overrides DataformRepository#workspace_compilation_overrides}

---

### DataformRepositoryGitRemoteSettings <a name="DataformRepositoryGitRemoteSettings" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepositoryGitRemoteSettings(
  default_branch: str,
  url: str,
  authentication_token_secret_version: str = None,
  git_repository_link: str = None,
  ssh_authentication_config: DataformRepositoryGitRemoteSettingsSshAuthenticationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.defaultBranch">default_branch</a></code> | <code>str</code> | The Git remote's default branch name. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.url">url</a></code> | <code>str</code> | The Git remote's URL. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.authenticationTokenSecretVersion">authentication_token_secret_version</a></code> | <code>str</code> | The name of the Secret Manager secret version to use as an authentication token for Git operations. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.gitRepositoryLink">git_repository_link</a></code> | <code>str</code> | The name of the Developer Connect GitRepositoryLink to use for machine credentials. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.sshAuthenticationConfig">ssh_authentication_config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a></code> | ssh_authentication_config block. |

---

##### `default_branch`<sup>Required</sup> <a name="default_branch" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.defaultBranch"></a>

```python
default_branch: str
```

- *Type:* str

The Git remote's default branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#default_branch DataformRepository#default_branch}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.url"></a>

```python
url: str
```

- *Type:* str

The Git remote's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#url DataformRepository#url}

---

##### `authentication_token_secret_version`<sup>Optional</sup> <a name="authentication_token_secret_version" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.authenticationTokenSecretVersion"></a>

```python
authentication_token_secret_version: str
```

- *Type:* str

The name of the Secret Manager secret version to use as an authentication token for Git operations.

This secret is for assigning with HTTPS only(for SSH use 'ssh_authentication_config'). Must be in the format projects/* /secrets/* /versions/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#authentication_token_secret_version DataformRepository#authentication_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `git_repository_link`<sup>Optional</sup> <a name="git_repository_link" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.gitRepositoryLink"></a>

```python
git_repository_link: str
```

- *Type:* str

The name of the Developer Connect GitRepositoryLink to use for machine credentials.

Must be in the format projects/* /locations/* /connections/* /gitRepositoryLinks/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#git_repository_link DataformRepository#git_repository_link}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ssh_authentication_config`<sup>Optional</sup> <a name="ssh_authentication_config" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.sshAuthenticationConfig"></a>

```python
ssh_authentication_config: DataformRepositoryGitRemoteSettingsSshAuthenticationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a>

ssh_authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#ssh_authentication_config DataformRepository#ssh_authentication_config}

---

### DataformRepositoryGitRemoteSettingsSshAuthenticationConfig <a name="DataformRepositoryGitRemoteSettingsSshAuthenticationConfig" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig(
  host_public_key: str,
  user_private_key_secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig.property.hostPublicKey">host_public_key</a></code> | <code>str</code> | Content of a public SSH key to verify an identity of a remote Git host. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig.property.userPrivateKeySecretVersion">user_private_key_secret_version</a></code> | <code>str</code> | The name of the Secret Manager secret version to use as a ssh private key for Git operations. |

---

##### `host_public_key`<sup>Required</sup> <a name="host_public_key" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig.property.hostPublicKey"></a>

```python
host_public_key: str
```

- *Type:* str

Content of a public SSH key to verify an identity of a remote Git host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#host_public_key DataformRepository#host_public_key}

---

##### `user_private_key_secret_version`<sup>Required</sup> <a name="user_private_key_secret_version" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig.property.userPrivateKeySecretVersion"></a>

```python
user_private_key_secret_version: str
```

- *Type:* str

The name of the Secret Manager secret version to use as a ssh private key for Git operations.

Must be in the format projects/* /secrets/* /versions/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#user_private_key_secret_version DataformRepository#user_private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DataformRepositoryTimeouts <a name="DataformRepositoryTimeouts" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepositoryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#create DataformRepository#create}. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#delete DataformRepository#delete}. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#update DataformRepository#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#create DataformRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#delete DataformRepository#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#update DataformRepository#update}.

---

### DataformRepositoryWorkspaceCompilationOverrides <a name="DataformRepositoryWorkspaceCompilationOverrides" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepositoryWorkspaceCompilationOverrides(
  default_database: str = None,
  schema_suffix: str = None,
  table_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.property.defaultDatabase">default_database</a></code> | <code>str</code> | The default database (Google Cloud project ID). |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.property.schemaSuffix">schema_suffix</a></code> | <code>str</code> | The suffix that should be appended to all schema (BigQuery dataset ID) names. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.property.tablePrefix">table_prefix</a></code> | <code>str</code> | The prefix that should be prepended to all table names. |

---

##### `default_database`<sup>Optional</sup> <a name="default_database" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.property.defaultDatabase"></a>

```python
default_database: str
```

- *Type:* str

The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#default_database DataformRepository#default_database}

---

##### `schema_suffix`<sup>Optional</sup> <a name="schema_suffix" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.property.schemaSuffix"></a>

```python
schema_suffix: str
```

- *Type:* str

The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#schema_suffix DataformRepository#schema_suffix}

---

##### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#table_prefix DataformRepository#table_prefix}

---

## Classes <a name="Classes" id="Classes"></a>

### DataformRepositoryGitRemoteSettingsOutputReference <a name="DataformRepositoryGitRemoteSettingsOutputReference" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.putSshAuthenticationConfig">put_ssh_authentication_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resetAuthenticationTokenSecretVersion">reset_authentication_token_secret_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resetGitRepositoryLink">reset_git_repository_link</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resetSshAuthenticationConfig">reset_ssh_authentication_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssh_authentication_config` <a name="put_ssh_authentication_config" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.putSshAuthenticationConfig"></a>

```python
def put_ssh_authentication_config(
  host_public_key: str,
  user_private_key_secret_version: str
) -> None
```

###### `host_public_key`<sup>Required</sup> <a name="host_public_key" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.putSshAuthenticationConfig.parameter.hostPublicKey"></a>

- *Type:* str

Content of a public SSH key to verify an identity of a remote Git host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#host_public_key DataformRepository#host_public_key}

---

###### `user_private_key_secret_version`<sup>Required</sup> <a name="user_private_key_secret_version" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.putSshAuthenticationConfig.parameter.userPrivateKeySecretVersion"></a>

- *Type:* str

The name of the Secret Manager secret version to use as a ssh private key for Git operations.

Must be in the format projects/* /secrets/* /versions/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#user_private_key_secret_version DataformRepository#user_private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `reset_authentication_token_secret_version` <a name="reset_authentication_token_secret_version" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resetAuthenticationTokenSecretVersion"></a>

```python
def reset_authentication_token_secret_version() -> None
```

##### `reset_git_repository_link` <a name="reset_git_repository_link" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resetGitRepositoryLink"></a>

```python
def reset_git_repository_link() -> None
```

##### `reset_ssh_authentication_config` <a name="reset_ssh_authentication_config" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resetSshAuthenticationConfig"></a>

```python
def reset_ssh_authentication_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.sshAuthenticationConfig">ssh_authentication_config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference">DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.tokenStatus">token_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersionInput">authentication_token_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranchInput">default_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.gitRepositoryLinkInput">git_repository_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.sshAuthenticationConfigInput">ssh_authentication_config_input</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersion">authentication_token_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranch">default_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.gitRepositoryLink">git_repository_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssh_authentication_config`<sup>Required</sup> <a name="ssh_authentication_config" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.sshAuthenticationConfig"></a>

```python
ssh_authentication_config: DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference">DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference</a>

---

##### `token_status`<sup>Required</sup> <a name="token_status" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.tokenStatus"></a>

```python
token_status: str
```

- *Type:* str

---

##### `authentication_token_secret_version_input`<sup>Optional</sup> <a name="authentication_token_secret_version_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersionInput"></a>

```python
authentication_token_secret_version_input: str
```

- *Type:* str

---

##### `default_branch_input`<sup>Optional</sup> <a name="default_branch_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranchInput"></a>

```python
default_branch_input: str
```

- *Type:* str

---

##### `git_repository_link_input`<sup>Optional</sup> <a name="git_repository_link_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.gitRepositoryLinkInput"></a>

```python
git_repository_link_input: str
```

- *Type:* str

---

##### `ssh_authentication_config_input`<sup>Optional</sup> <a name="ssh_authentication_config_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.sshAuthenticationConfigInput"></a>

```python
ssh_authentication_config_input: DataformRepositoryGitRemoteSettingsSshAuthenticationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `authentication_token_secret_version`<sup>Required</sup> <a name="authentication_token_secret_version" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersion"></a>

```python
authentication_token_secret_version: str
```

- *Type:* str

---

##### `default_branch`<sup>Required</sup> <a name="default_branch" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranch"></a>

```python
default_branch: str
```

- *Type:* str

---

##### `git_repository_link`<sup>Required</sup> <a name="git_repository_link" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.gitRepositoryLink"></a>

```python
git_repository_link: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataformRepositoryGitRemoteSettings
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a>

---


### DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference <a name="DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.hostPublicKeyInput">host_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.userPrivateKeySecretVersionInput">user_private_key_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.hostPublicKey">host_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.userPrivateKeySecretVersion">user_private_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_public_key_input`<sup>Optional</sup> <a name="host_public_key_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.hostPublicKeyInput"></a>

```python
host_public_key_input: str
```

- *Type:* str

---

##### `user_private_key_secret_version_input`<sup>Optional</sup> <a name="user_private_key_secret_version_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.userPrivateKeySecretVersionInput"></a>

```python
user_private_key_secret_version_input: str
```

- *Type:* str

---

##### `host_public_key`<sup>Required</sup> <a name="host_public_key" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.hostPublicKey"></a>

```python
host_public_key: str
```

- *Type:* str

---

##### `user_private_key_secret_version`<sup>Required</sup> <a name="user_private_key_secret_version" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.userPrivateKeySecretVersion"></a>

```python
user_private_key_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataformRepositoryGitRemoteSettingsSshAuthenticationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a>

---


### DataformRepositoryTimeoutsOutputReference <a name="DataformRepositoryTimeoutsOutputReference" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepositoryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts">DataformRepositoryTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataformRepositoryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts">DataformRepositoryTimeouts</a>

---


### DataformRepositoryWorkspaceCompilationOverridesOutputReference <a name="DataformRepositoryWorkspaceCompilationOverridesOutputReference" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository

dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resetDefaultDatabase">reset_default_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resetSchemaSuffix">reset_schema_suffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resetTablePrefix">reset_table_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_database` <a name="reset_default_database" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resetDefaultDatabase"></a>

```python
def reset_default_database() -> None
```

##### `reset_schema_suffix` <a name="reset_schema_suffix" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resetSchemaSuffix"></a>

```python
def reset_schema_suffix() -> None
```

##### `reset_table_prefix` <a name="reset_table_prefix" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resetTablePrefix"></a>

```python
def reset_table_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabaseInput">default_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffixInput">schema_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefixInput">table_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabase">default_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffix">schema_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefix">table_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_database_input`<sup>Optional</sup> <a name="default_database_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabaseInput"></a>

```python
default_database_input: str
```

- *Type:* str

---

##### `schema_suffix_input`<sup>Optional</sup> <a name="schema_suffix_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffixInput"></a>

```python
schema_suffix_input: str
```

- *Type:* str

---

##### `table_prefix_input`<sup>Optional</sup> <a name="table_prefix_input" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefixInput"></a>

```python
table_prefix_input: str
```

- *Type:* str

---

##### `default_database`<sup>Required</sup> <a name="default_database" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabase"></a>

```python
default_database: str
```

- *Type:* str

---

##### `schema_suffix`<sup>Required</sup> <a name="schema_suffix" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffix"></a>

```python
schema_suffix: str
```

- *Type:* str

---

##### `table_prefix`<sup>Required</sup> <a name="table_prefix" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.internalValue"></a>

```python
internal_value: DataformRepositoryWorkspaceCompilationOverrides
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a>

---



