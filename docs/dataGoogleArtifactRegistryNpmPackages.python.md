# `dataGoogleArtifactRegistryNpmPackages` Submodule <a name="`dataGoogleArtifactRegistryNpmPackages` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryNpmPackages <a name="DataGoogleArtifactRegistryNpmPackages" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages google_artifact_registry_npm_packages}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_npm_packages

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  repository_id: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#location DataGoogleArtifactRegistryNpmPackages#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#repository_id DataGoogleArtifactRegistryNpmPackages#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#id DataGoogleArtifactRegistryNpmPackages#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#project DataGoogleArtifactRegistryNpmPackages#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#location DataGoogleArtifactRegistryNpmPackages#location}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#repository_id DataGoogleArtifactRegistryNpmPackages#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#id DataGoogleArtifactRegistryNpmPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#project DataGoogleArtifactRegistryNpmPackages#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryNpmPackages resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isConstruct"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_npm_packages

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_npm_packages

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_npm_packages

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_npm_packages

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryNpmPackages resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleArtifactRegistryNpmPackages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleArtifactRegistryNpmPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryNpmPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.npmPackages">npm_packages</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList">DataGoogleArtifactRegistryNpmPackagesNpmPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `npm_packages`<sup>Required</sup> <a name="npm_packages" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.npmPackages"></a>

```python
npm_packages: DataGoogleArtifactRegistryNpmPackagesNpmPackagesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList">DataGoogleArtifactRegistryNpmPackagesNpmPackagesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryNpmPackagesConfig <a name="DataGoogleArtifactRegistryNpmPackagesConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_npm_packages

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  repository_id: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#location DataGoogleArtifactRegistryNpmPackages#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#repository_id DataGoogleArtifactRegistryNpmPackages#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#id DataGoogleArtifactRegistryNpmPackages#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#project DataGoogleArtifactRegistryNpmPackages#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#location DataGoogleArtifactRegistryNpmPackages#location}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#repository_id DataGoogleArtifactRegistryNpmPackages#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#id DataGoogleArtifactRegistryNpmPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_npm_packages#project DataGoogleArtifactRegistryNpmPackages#project}.

---

### DataGoogleArtifactRegistryNpmPackagesNpmPackages <a name="DataGoogleArtifactRegistryNpmPackagesNpmPackages" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_npm_packages

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryNpmPackagesNpmPackagesList <a name="DataGoogleArtifactRegistryNpmPackagesNpmPackagesList" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_npm_packages

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference <a name="DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_npm_packages

dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.packageName">package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages">DataGoogleArtifactRegistryNpmPackagesNpmPackages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackagesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleArtifactRegistryNpmPackagesNpmPackages
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryNpmPackages.DataGoogleArtifactRegistryNpmPackagesNpmPackages">DataGoogleArtifactRegistryNpmPackagesNpmPackages</a>

---



