# `dataGoogleAccessContextManagerSupportedService` Submodule <a name="`dataGoogleAccessContextManagerSupportedService` Submodule" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAccessContextManagerSupportedService <a name="DataGoogleAccessContextManagerSupportedService" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/access_context_manager_supported_service google_access_context_manager_supported_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_service

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  service_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | The name of the service to get information about. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/access_context_manager_supported_service#id DataGoogleAccessContextManagerSupportedService#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.serviceName"></a>

- *Type:* str

The name of the service to get information about.

The names must be in the same format as used in defining a service perimeter, for example, `storage.googleapis.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/access_context_manager_supported_service#service_name DataGoogleAccessContextManagerSupportedService#service_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/access_context_manager_supported_service#id DataGoogleAccessContextManagerSupportedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_service

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_service

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_service

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_service

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleAccessContextManagerSupportedService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleAccessContextManagerSupportedService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/access_context_manager_supported_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAccessContextManagerSupportedService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.availableOnRestrictedVip">available_on_restricted_vip</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.knownLimitations">known_limitations</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceSupportStage">service_support_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportedMethods">supported_methods</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList">DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportStage">support_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `available_on_restricted_vip`<sup>Required</sup> <a name="available_on_restricted_vip" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.availableOnRestrictedVip"></a>

```python
available_on_restricted_vip: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `known_limitations`<sup>Required</sup> <a name="known_limitations" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.knownLimitations"></a>

```python
known_limitations: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `service_support_stage`<sup>Required</sup> <a name="service_support_stage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceSupportStage"></a>

```python
service_support_stage: str
```

- *Type:* str

---

##### `supported_methods`<sup>Required</sup> <a name="supported_methods" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportedMethods"></a>

```python
supported_methods: DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList">DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList</a>

---

##### `support_stage`<sup>Required</sup> <a name="support_stage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportStage"></a>

```python
support_stage: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAccessContextManagerSupportedServiceConfig <a name="DataGoogleAccessContextManagerSupportedServiceConfig" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_service

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  service_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.serviceName">service_name</a></code> | <code>str</code> | The name of the service to get information about. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/access_context_manager_supported_service#id DataGoogleAccessContextManagerSupportedService#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the service to get information about.

The names must be in the same format as used in defining a service perimeter, for example, `storage.googleapis.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/access_context_manager_supported_service#service_name DataGoogleAccessContextManagerSupportedService#service_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/access_context_manager_supported_service#id DataGoogleAccessContextManagerSupportedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleAccessContextManagerSupportedServiceSupportedMethods <a name="DataGoogleAccessContextManagerSupportedServiceSupportedMethods" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods.Initializer"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_service

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList <a name="DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_service

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference <a name="DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_access_context_manager_supported_service

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods">DataGoogleAccessContextManagerSupportedServiceSupportedMethods</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAccessContextManagerSupportedServiceSupportedMethods
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods">DataGoogleAccessContextManagerSupportedServiceSupportedMethods</a>

---



