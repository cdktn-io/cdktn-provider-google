# `dataGoogleArtifactRegistryMavenArtifact` Submodule <a name="`dataGoogleArtifactRegistryMavenArtifact` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryMavenArtifact <a name="DataGoogleArtifactRegistryMavenArtifact" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact google_artifact_registry_maven_artifact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifact

dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_id: str,
  group_id: str,
  location: str,
  repository_id: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.artifactId">artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#artifact_id DataGoogleArtifactRegistryMavenArtifact#artifact_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#group_id DataGoogleArtifactRegistryMavenArtifact#group_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#location DataGoogleArtifactRegistryMavenArtifact#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#repository_id DataGoogleArtifactRegistryMavenArtifact#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#id DataGoogleArtifactRegistryMavenArtifact#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#project DataGoogleArtifactRegistryMavenArtifact#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.artifactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#artifact_id DataGoogleArtifactRegistryMavenArtifact#artifact_id}.

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#group_id DataGoogleArtifactRegistryMavenArtifact#group_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#location DataGoogleArtifactRegistryMavenArtifact#location}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#repository_id DataGoogleArtifactRegistryMavenArtifact#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#id DataGoogleArtifactRegistryMavenArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#project DataGoogleArtifactRegistryMavenArtifact#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryMavenArtifact resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isConstruct"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifact

dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifact

dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifact

dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifact

dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryMavenArtifact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleArtifactRegistryMavenArtifact to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleArtifactRegistryMavenArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryMavenArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.pomUri">pom_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.artifactIdInput">artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.artifactId">artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pom_uri`<sup>Required</sup> <a name="pom_uri" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.pomUri"></a>

```python
pom_uri: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `artifact_id_input`<sup>Optional</sup> <a name="artifact_id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.artifactIdInput"></a>

```python
artifact_id_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryMavenArtifactConfig <a name="DataGoogleArtifactRegistryMavenArtifactConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_artifact_registry_maven_artifact

dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_id: str,
  group_id: str,
  location: str,
  repository_id: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.artifactId">artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#artifact_id DataGoogleArtifactRegistryMavenArtifact#artifact_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#group_id DataGoogleArtifactRegistryMavenArtifact#group_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#location DataGoogleArtifactRegistryMavenArtifact#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#repository_id DataGoogleArtifactRegistryMavenArtifact#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#id DataGoogleArtifactRegistryMavenArtifact#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#project DataGoogleArtifactRegistryMavenArtifact#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#artifact_id DataGoogleArtifactRegistryMavenArtifact#artifact_id}.

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#group_id DataGoogleArtifactRegistryMavenArtifact#group_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#location DataGoogleArtifactRegistryMavenArtifact#location}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#repository_id DataGoogleArtifactRegistryMavenArtifact#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#id DataGoogleArtifactRegistryMavenArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/artifact_registry_maven_artifact#project DataGoogleArtifactRegistryMavenArtifact#project}.

---



