# `dataGoogleArtifactRegistryVersions` Submodule <a name="`dataGoogleArtifactRegistryVersions` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryVersions <a name="DataGoogleArtifactRegistryVersions" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions google_artifact_registry_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_versions

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions(
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
  package_name: str,
  repository_id: str,
  filter: str = None,
  id: str = None,
  project: str = None,
  view: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#location DataGoogleArtifactRegistryVersions#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.packageName">package_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#package_name DataGoogleArtifactRegistryVersions#package_name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#repository_id DataGoogleArtifactRegistryVersions#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#filter DataGoogleArtifactRegistryVersions#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#id DataGoogleArtifactRegistryVersions#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#project DataGoogleArtifactRegistryVersions#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#view DataGoogleArtifactRegistryVersions#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#location DataGoogleArtifactRegistryVersions#location}.

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.packageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#package_name DataGoogleArtifactRegistryVersions#package_name}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#repository_id DataGoogleArtifactRegistryVersions#repository_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#filter DataGoogleArtifactRegistryVersions#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#id DataGoogleArtifactRegistryVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#project DataGoogleArtifactRegistryVersions#project}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.view"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#view DataGoogleArtifactRegistryVersions#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryVersions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isConstruct"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_versions

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_versions

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_versions

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_versions

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleArtifactRegistryVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleArtifactRegistryVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList">DataGoogleArtifactRegistryVersionsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.packageNameInput">package_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.viewInput">view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.packageName">package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.view">view</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.versions"></a>

```python
versions: DataGoogleArtifactRegistryVersionsVersionsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList">DataGoogleArtifactRegistryVersionsVersionsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `package_name_input`<sup>Optional</sup> <a name="package_name_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.packageNameInput"></a>

```python
package_name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.viewInput"></a>

```python
view_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.view"></a>

```python
view: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryVersionsConfig <a name="DataGoogleArtifactRegistryVersionsConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_versions

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  package_name: str,
  repository_id: str,
  filter: str = None,
  id: str = None,
  project: str = None,
  view: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#location DataGoogleArtifactRegistryVersions#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.packageName">package_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#package_name DataGoogleArtifactRegistryVersions#package_name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#repository_id DataGoogleArtifactRegistryVersions#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#filter DataGoogleArtifactRegistryVersions#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#id DataGoogleArtifactRegistryVersions#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#project DataGoogleArtifactRegistryVersions#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#view DataGoogleArtifactRegistryVersions#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#location DataGoogleArtifactRegistryVersions#location}.

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#package_name DataGoogleArtifactRegistryVersions#package_name}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#repository_id DataGoogleArtifactRegistryVersions#repository_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#filter DataGoogleArtifactRegistryVersions#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#id DataGoogleArtifactRegistryVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#project DataGoogleArtifactRegistryVersions#project}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.view"></a>

```python
view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_versions#view DataGoogleArtifactRegistryVersions#view}.

---

### DataGoogleArtifactRegistryVersionsVersions <a name="DataGoogleArtifactRegistryVersionsVersions" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_versions

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions()
```


### DataGoogleArtifactRegistryVersionsVersionsRelatedTags <a name="DataGoogleArtifactRegistryVersionsVersionsRelatedTags" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_versions

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryVersionsVersionsList <a name="DataGoogleArtifactRegistryVersionsVersionsList" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_versions

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleArtifactRegistryVersionsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleArtifactRegistryVersionsVersionsOutputReference <a name="DataGoogleArtifactRegistryVersionsVersionsOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_versions

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.relatedTags">related_tags</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList">DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions">DataGoogleArtifactRegistryVersionsVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.annotations"></a>

```python
annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `related_tags`<sup>Required</sup> <a name="related_tags" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.relatedTags"></a>

```python
related_tags: DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList">DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleArtifactRegistryVersionsVersions
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions">DataGoogleArtifactRegistryVersionsVersions</a>

---


### DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList <a name="DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_versions

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference <a name="DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_versions

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags">DataGoogleArtifactRegistryVersionsVersionsRelatedTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleArtifactRegistryVersionsVersionsRelatedTags
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags">DataGoogleArtifactRegistryVersionsVersionsRelatedTags</a>

---



