# `dataGoogleAccessContextManagerSupportedServices` Submodule <a name="`dataGoogleAccessContextManagerSupportedServices` Submodule" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAccessContextManagerSupportedServices <a name="DataGoogleAccessContextManagerSupportedServices" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/access_context_manager_supported_services google_access_context_manager_supported_services}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_services

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/access_context_manager_supported_services#id DataGoogleAccessContextManagerSupportedServices#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/access_context_manager_supported_services#id DataGoogleAccessContextManagerSupportedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedServices resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isConstruct"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_services

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_services

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_services

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_services

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedServices resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleAccessContextManagerSupportedServices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleAccessContextManagerSupportedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/access_context_manager_supported_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAccessContextManagerSupportedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.supportedServices">supported_services</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList">DataGoogleAccessContextManagerSupportedServicesSupportedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `supported_services`<sup>Required</sup> <a name="supported_services" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.supportedServices"></a>

```python
supported_services: DataGoogleAccessContextManagerSupportedServicesSupportedServicesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList">DataGoogleAccessContextManagerSupportedServicesSupportedServicesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAccessContextManagerSupportedServicesConfig <a name="DataGoogleAccessContextManagerSupportedServicesConfig" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_services

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/access_context_manager_supported_services#id DataGoogleAccessContextManagerSupportedServices#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/access_context_manager_supported_services#id DataGoogleAccessContextManagerSupportedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleAccessContextManagerSupportedServicesSupportedServices <a name="DataGoogleAccessContextManagerSupportedServicesSupportedServices" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices.Initializer"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_services

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAccessContextManagerSupportedServicesSupportedServicesList <a name="DataGoogleAccessContextManagerSupportedServicesSupportedServicesList" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_services

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference <a name="DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_services

dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.availableOnRestrictedVip">available_on_restricted_vip</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.knownLimitations">known_limitations</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.serviceSupportStage">service_support_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.supportStage">support_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices">DataGoogleAccessContextManagerSupportedServicesSupportedServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_on_restricted_vip`<sup>Required</sup> <a name="available_on_restricted_vip" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.availableOnRestrictedVip"></a>

```python
available_on_restricted_vip: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `known_limitations`<sup>Required</sup> <a name="known_limitations" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.knownLimitations"></a>

```python
known_limitations: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_support_stage`<sup>Required</sup> <a name="service_support_stage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.serviceSupportStage"></a>

```python
service_support_stage: str
```

- *Type:* str

---

##### `support_stage`<sup>Required</sup> <a name="support_stage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.supportStage"></a>

```python
support_stage: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAccessContextManagerSupportedServicesSupportedServices
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices">DataGoogleAccessContextManagerSupportedServicesSupportedServices</a>

---



