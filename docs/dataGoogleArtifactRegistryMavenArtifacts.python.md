# `dataGoogleArtifactRegistryMavenArtifacts` Submodule <a name="`dataGoogleArtifactRegistryMavenArtifacts` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryMavenArtifacts <a name="DataGoogleArtifactRegistryMavenArtifacts" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts google_artifact_registry_maven_artifacts}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifacts

dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts(
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
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#location DataGoogleArtifactRegistryMavenArtifacts#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#repository_id DataGoogleArtifactRegistryMavenArtifacts#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#id DataGoogleArtifactRegistryMavenArtifacts#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#project DataGoogleArtifactRegistryMavenArtifacts#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#location DataGoogleArtifactRegistryMavenArtifacts#location}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#repository_id DataGoogleArtifactRegistryMavenArtifacts#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#id DataGoogleArtifactRegistryMavenArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#project DataGoogleArtifactRegistryMavenArtifacts#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryMavenArtifacts resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isConstruct"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifacts

dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifacts

dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifacts

dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifacts

dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryMavenArtifacts resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleArtifactRegistryMavenArtifacts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleArtifactRegistryMavenArtifacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryMavenArtifacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.mavenArtifacts">maven_artifacts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList">DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `maven_artifacts`<sup>Required</sup> <a name="maven_artifacts" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.mavenArtifacts"></a>

```python
maven_artifacts: DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList">DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryMavenArtifactsConfig <a name="DataGoogleArtifactRegistryMavenArtifactsConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifacts

dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig(
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
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#location DataGoogleArtifactRegistryMavenArtifacts#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#repository_id DataGoogleArtifactRegistryMavenArtifacts#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#id DataGoogleArtifactRegistryMavenArtifacts#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#project DataGoogleArtifactRegistryMavenArtifacts#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#location DataGoogleArtifactRegistryMavenArtifacts#location}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#repository_id DataGoogleArtifactRegistryMavenArtifacts#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#id DataGoogleArtifactRegistryMavenArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/artifact_registry_maven_artifacts#project DataGoogleArtifactRegistryMavenArtifacts#project}.

---

### DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts <a name="DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifacts

dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList <a name="DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifacts

dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference <a name="DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifacts

dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.artifactId">artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.pomUri">pom_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts">DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pom_uri`<sup>Required</sup> <a name="pom_uri" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.pomUri"></a>

```python
pom_uri: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts">DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts</a>

---



