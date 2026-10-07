# `dataGoogleObservabilityFolderSettings` Submodule <a name="`dataGoogleObservabilityFolderSettings` Submodule" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleObservabilityFolderSettings <a name="DataGoogleObservabilityFolderSettings" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_folder_settings google_observability_folder_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer"></a>

```python
from cdktn_provider_google import data_google_observability_folder_settings

dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  folder: str,
  location: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The folder ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_folder_settings#id DataGoogleObservabilityFolderSettings#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.folder"></a>

- *Type:* str

The folder ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_folder_settings#folder DataGoogleObservabilityFolderSettings#folder}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.location"></a>

- *Type:* str

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_folder_settings#location DataGoogleObservabilityFolderSettings#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_folder_settings#id DataGoogleObservabilityFolderSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleObservabilityFolderSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.isConstruct"></a>

```python
from cdktn_provider_google import data_google_observability_folder_settings

dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_observability_folder_settings

dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_observability_folder_settings

dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_observability_folder_settings

dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleObservabilityFolderSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleObservabilityFolderSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleObservabilityFolderSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_folder_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleObservabilityFolderSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.defaultStorageLocation">default_storage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.location">location</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `default_storage_location`<sup>Required</sup> <a name="default_storage_location" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.defaultStorageLocation"></a>

```python
default_storage_location: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.location"></a>

```python
location: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleObservabilityFolderSettingsConfig <a name="DataGoogleObservabilityFolderSettingsConfig" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_observability_folder_settings

dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  folder: str,
  location: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.folder">folder</a></code> | <code>str</code> | The folder ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.location">location</a></code> | <code>str</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_folder_settings#id DataGoogleObservabilityFolderSettings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The folder ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_folder_settings#folder DataGoogleObservabilityFolderSettings#folder}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_folder_settings#location DataGoogleObservabilityFolderSettings#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleObservabilityFolderSettings.DataGoogleObservabilityFolderSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/observability_folder_settings#id DataGoogleObservabilityFolderSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



