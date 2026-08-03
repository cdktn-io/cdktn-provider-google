# `dataGoogleStorageControlProjectIntelligenceFinding` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceFinding` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceFinding <a name="DataGoogleStorageControlProjectIntelligenceFinding" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding google_storage_control_project_intelligence_finding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  finding_id: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.findingId">finding_id</a></code> | <code>str</code> | The ID of the intelligence finding. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding#id DataGoogleStorageControlProjectIntelligenceFinding#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the intelligence finding. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `finding_id`<sup>Required</sup> <a name="finding_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.findingId"></a>

- *Type:* str

The ID of the intelligence finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding#finding_id DataGoogleStorageControlProjectIntelligenceFinding#finding_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding#id DataGoogleStorageControlProjectIntelligenceFinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.location"></a>

- *Type:* str

The location of the intelligence finding. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding#location DataGoogleStorageControlProjectIntelligenceFinding#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding#project DataGoogleStorageControlProjectIntelligenceFinding#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isConstruct"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleStorageControlProjectIntelligenceFinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.associatedResources">associated_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.coldlineAndArchivalStorageOperationsSpike">coldline_and_archival_storage_operations_spike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.crossRegionEgressSpike">cross_region_egress_spike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.observationPeriod">observation_period</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.storageGrowthAboveTrend">storage_growth_above_trend</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.targetResource">target_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.throttledRequestsSpike">throttled_requests_spike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.findingIdInput">finding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.findingId">finding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `associated_resources`<sup>Required</sup> <a name="associated_resources" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.associatedResources"></a>

```python
associated_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `coldline_and_archival_storage_operations_spike`<sup>Required</sup> <a name="coldline_and_archival_storage_operations_spike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.coldlineAndArchivalStorageOperationsSpike"></a>

```python
coldline_and_archival_storage_operations_spike: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `cross_region_egress_spike`<sup>Required</sup> <a name="cross_region_egress_spike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.crossRegionEgressSpike"></a>

```python
cross_region_egress_spike: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `observation_period`<sup>Required</sup> <a name="observation_period" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.observationPeriod"></a>

```python
observation_period: DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `storage_growth_above_trend`<sup>Required</sup> <a name="storage_growth_above_trend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.storageGrowthAboveTrend"></a>

```python
storage_growth_above_trend: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList</a>

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.targetResource"></a>

```python
target_resource: str
```

- *Type:* str

---

##### `throttled_requests_spike`<sup>Required</sup> <a name="throttled_requests_spike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.throttledRequestsSpike"></a>

```python
throttled_requests_spike: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `finding_id_input`<sup>Optional</sup> <a name="finding_id_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.findingIdInput"></a>

```python
finding_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `finding_id`<sup>Required</sup> <a name="finding_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.findingId"></a>

```python
finding_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike()
```


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError()
```


### DataGoogleStorageControlProjectIntelligenceFindingConfig <a name="DataGoogleStorageControlProjectIntelligenceFindingConfig" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  finding_id: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.findingId">finding_id</a></code> | <code>str</code> | The ID of the intelligence finding. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding#id DataGoogleStorageControlProjectIntelligenceFinding#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.location">location</a></code> | <code>str</code> | The location of the intelligence finding. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `finding_id`<sup>Required</sup> <a name="finding_id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.findingId"></a>

```python
finding_id: str
```

- *Type:* str

The ID of the intelligence finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding#finding_id DataGoogleStorageControlProjectIntelligenceFinding#finding_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding#id DataGoogleStorageControlProjectIntelligenceFinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the intelligence finding. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding#location DataGoogleStorageControlProjectIntelligenceFinding#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding#project DataGoogleStorageControlProjectIntelligenceFinding#project}

---

### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike()
```


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError()
```


### DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod <a name="DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod()
```


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend()
```


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError()
```


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike()
```


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a>

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList</a>

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList <a name="DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList</a>

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_project_intelligence_finding

dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFinding.DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets</a>

---



