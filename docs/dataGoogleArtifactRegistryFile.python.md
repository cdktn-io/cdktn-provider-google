# `dataGoogleArtifactRegistryFile` Submodule <a name="`dataGoogleArtifactRegistryFile` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryFile <a name="DataGoogleArtifactRegistryFile" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file google_artifact_registry_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_file

dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_id: str,
  location: str,
  output_path: str,
  repository_id: str,
  id: str = None,
  overwrite: bool | IResolvable = None,
  project: str = None,
  timeouts: DataGoogleArtifactRegistryFileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.fileId">file_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#file_id DataGoogleArtifactRegistryFile#file_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#location DataGoogleArtifactRegistryFile#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.outputPath">output_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#output_path DataGoogleArtifactRegistryFile#output_path}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#repository_id DataGoogleArtifactRegistryFile#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#id DataGoogleArtifactRegistryFile#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.overwrite">overwrite</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#overwrite DataGoogleArtifactRegistryFile#overwrite}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#project DataGoogleArtifactRegistryFile#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_id`<sup>Required</sup> <a name="file_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.fileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#file_id DataGoogleArtifactRegistryFile#file_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#location DataGoogleArtifactRegistryFile#location}.

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.outputPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#output_path DataGoogleArtifactRegistryFile#output_path}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#repository_id DataGoogleArtifactRegistryFile#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#id DataGoogleArtifactRegistryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwrite`<sup>Optional</sup> <a name="overwrite" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.overwrite"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#overwrite DataGoogleArtifactRegistryFile#overwrite}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#project DataGoogleArtifactRegistryFile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#timeouts DataGoogleArtifactRegistryFile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetOverwrite">reset_overwrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#read DataGoogleArtifactRegistryFile#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_overwrite` <a name="reset_overwrite" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetOverwrite"></a>

```python
def reset_overwrite() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryFile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isConstruct"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_file

dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_file

dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_file

dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_file

dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleArtifactRegistryFile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleArtifactRegistryFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.hashes">hashes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputBase64Sha256">output_base64_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputSha256">output_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.sizeBytes">size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference">DataGoogleArtifactRegistryFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fileIdInput">file_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputPathInput">output_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.overwriteInput">overwrite_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fileId">file_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputPath">output_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.overwrite">overwrite</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `hashes`<sup>Required</sup> <a name="hashes" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.hashes"></a>

```python
hashes: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_base64_sha256`<sup>Required</sup> <a name="output_base64_sha256" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputBase64Sha256"></a>

```python
output_base64_sha256: str
```

- *Type:* str

---

##### `output_sha256`<sup>Required</sup> <a name="output_sha256" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputSha256"></a>

```python
output_sha256: str
```

- *Type:* str

---

##### `size_bytes`<sup>Required</sup> <a name="size_bytes" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.sizeBytes"></a>

```python
size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.timeouts"></a>

```python
timeouts: DataGoogleArtifactRegistryFileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference">DataGoogleArtifactRegistryFileTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `file_id_input`<sup>Optional</sup> <a name="file_id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fileIdInput"></a>

```python
file_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `output_path_input`<sup>Optional</sup> <a name="output_path_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputPathInput"></a>

```python
output_path_input: str
```

- *Type:* str

---

##### `overwrite_input`<sup>Optional</sup> <a name="overwrite_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.overwriteInput"></a>

```python
overwrite_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataGoogleArtifactRegistryFileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

---

##### `file_id`<sup>Required</sup> <a name="file_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fileId"></a>

```python
file_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputPath"></a>

```python
output_path: str
```

- *Type:* str

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.overwrite"></a>

```python
overwrite: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryFileConfig <a name="DataGoogleArtifactRegistryFileConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_file

dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_id: str,
  location: str,
  output_path: str,
  repository_id: str,
  id: str = None,
  overwrite: bool | IResolvable = None,
  project: str = None,
  timeouts: DataGoogleArtifactRegistryFileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.fileId">file_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#file_id DataGoogleArtifactRegistryFile#file_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#location DataGoogleArtifactRegistryFile#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.outputPath">output_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#output_path DataGoogleArtifactRegistryFile#output_path}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#repository_id DataGoogleArtifactRegistryFile#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#id DataGoogleArtifactRegistryFile#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.overwrite">overwrite</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#overwrite DataGoogleArtifactRegistryFile#overwrite}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#project DataGoogleArtifactRegistryFile#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_id`<sup>Required</sup> <a name="file_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.fileId"></a>

```python
file_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#file_id DataGoogleArtifactRegistryFile#file_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#location DataGoogleArtifactRegistryFile#location}.

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.outputPath"></a>

```python
output_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#output_path DataGoogleArtifactRegistryFile#output_path}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#repository_id DataGoogleArtifactRegistryFile#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#id DataGoogleArtifactRegistryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwrite`<sup>Optional</sup> <a name="overwrite" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.overwrite"></a>

```python
overwrite: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#overwrite DataGoogleArtifactRegistryFile#overwrite}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#project DataGoogleArtifactRegistryFile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.timeouts"></a>

```python
timeouts: DataGoogleArtifactRegistryFileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#timeouts DataGoogleArtifactRegistryFile#timeouts}

---

### DataGoogleArtifactRegistryFileTimeouts <a name="DataGoogleArtifactRegistryFileTimeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_file

dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#read DataGoogleArtifactRegistryFile#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_file#read DataGoogleArtifactRegistryFile#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryFileTimeoutsOutputReference <a name="DataGoogleArtifactRegistryFileTimeoutsOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_file

dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataGoogleArtifactRegistryFileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

---



