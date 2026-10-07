# `dataGoogleNetworkServicesGateway` Submodule <a name="`dataGoogleNetworkServicesGateway` Submodule" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkServicesGateway <a name="DataGoogleNetworkServicesGateway" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway google_network_services_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_services_gateway

dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway(
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
  name: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Gateway resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#id DataGoogleNetworkServicesGateway#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#project DataGoogleNetworkServicesGateway#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.location"></a>

- *Type:* str

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#location DataGoogleNetworkServicesGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.name"></a>

- *Type:* str

Name of the Gateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#name DataGoogleNetworkServicesGateway#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#id DataGoogleNetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#project DataGoogleNetworkServicesGateway#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleNetworkServicesGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isConstruct"></a>

```python
from cdktn_provider_google import data_google_network_services_gateway

dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_network_services_gateway

dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_network_services_gateway

dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_network_services_gateway

dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleNetworkServicesGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleNetworkServicesGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleNetworkServicesGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkServicesGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.allowGlobalAccess">allow_global_access</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.allPorts">all_ports</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.certificateUrls">certificate_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy">delete_swg_autogen_router_on_destroy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.envoyHeaders">envoy_headers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.gatewaySecurityPolicy">gateway_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.routingMode">routing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_global_access`<sup>Required</sup> <a name="allow_global_access" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.allowGlobalAccess"></a>

```python
allow_global_access: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `all_ports`<sup>Required</sup> <a name="all_ports" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.allPorts"></a>

```python
all_ports: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `certificate_urls`<sup>Required</sup> <a name="certificate_urls" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.certificateUrls"></a>

```python
certificate_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_swg_autogen_router_on_destroy`<sup>Required</sup> <a name="delete_swg_autogen_router_on_destroy" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy"></a>

```python
delete_swg_autogen_router_on_destroy: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `envoy_headers`<sup>Required</sup> <a name="envoy_headers" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.envoyHeaders"></a>

```python
envoy_headers: str
```

- *Type:* str

---

##### `gateway_security_policy`<sup>Required</sup> <a name="gateway_security_policy" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.gatewaySecurityPolicy"></a>

```python
gateway_security_policy: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `routing_mode`<sup>Required</sup> <a name="routing_mode" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.routingMode"></a>

```python
routing_mode: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `server_tls_policy`<sup>Required</sup> <a name="server_tls_policy" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.serverTlsPolicy"></a>

```python
server_tls_policy: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkServicesGatewayConfig <a name="DataGoogleNetworkServicesGatewayConfig" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_services_gateway

dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.location">location</a></code> | <code>str</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.name">name</a></code> | <code>str</code> | Name of the Gateway resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#id DataGoogleNetworkServicesGateway#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#project DataGoogleNetworkServicesGateway#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#location DataGoogleNetworkServicesGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Gateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#name DataGoogleNetworkServicesGateway#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#id DataGoogleNetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#project DataGoogleNetworkServicesGateway#project}.

---



