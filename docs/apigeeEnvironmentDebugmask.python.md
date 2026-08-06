# `apigeeEnvironmentDebugmask` Submodule <a name="`apigeeEnvironmentDebugmask` Submodule" id="@cdktn/provider-google.apigeeEnvironmentDebugmask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentDebugmask <a name="ApigeeEnvironmentDebugmask" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask google_apigee_environment_debugmask}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer"></a>

```python
from cdktn_provider_google import apigee_environment_debugmask

apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  env_id: str,
  fault_x_paths: typing.List[str] = None,
  id: str = None,
  namespaces: typing.Mapping[str] = None,
  request_json_paths: typing.List[str] = None,
  request_x_paths: typing.List[str] = None,
  response_json_paths: typing.List[str] = None,
  response_x_paths: typing.List[str] = None,
  timeouts: ApigeeEnvironmentDebugmaskTimeouts = None,
  variables: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.envId">env_id</a></code> | <code>str</code> | The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.faultXPaths">fault_x_paths</a></code> | <code>typing.List[str]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#id ApigeeEnvironmentDebugmask#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.namespaces">namespaces</a></code> | <code>typing.Mapping[str]</code> | Map of namespaces to URIs. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.requestJsonPaths">request_json_paths</a></code> | <code>typing.List[str]</code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.requestXPaths">request_x_paths</a></code> | <code>typing.List[str]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.responseJsonPaths">response_json_paths</a></code> | <code>typing.List[str]</code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.responseXPaths">response_x_paths</a></code> | <code>typing.List[str]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.variables">variables</a></code> | <code>typing.List[str]</code> | List of variables that the debug mask applies to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.envId"></a>

- *Type:* str

The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#env_id ApigeeEnvironmentDebugmask#env_id}

---

##### `fault_x_paths`<sup>Optional</sup> <a name="fault_x_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.faultXPaths"></a>

- *Type:* typing.List[str]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#fault_x_paths ApigeeEnvironmentDebugmask#fault_x_paths}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#id ApigeeEnvironmentDebugmask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.namespaces"></a>

- *Type:* typing.Mapping[str]

Map of namespaces to URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#namespaces ApigeeEnvironmentDebugmask#namespaces}

---

##### `request_json_paths`<sup>Optional</sup> <a name="request_json_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.requestJsonPaths"></a>

- *Type:* typing.List[str]

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#request_json_paths ApigeeEnvironmentDebugmask#request_json_paths}

---

##### `request_x_paths`<sup>Optional</sup> <a name="request_x_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.requestXPaths"></a>

- *Type:* typing.List[str]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#request_x_paths ApigeeEnvironmentDebugmask#request_x_paths}

---

##### `response_json_paths`<sup>Optional</sup> <a name="response_json_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.responseJsonPaths"></a>

- *Type:* typing.List[str]

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#response_json_paths ApigeeEnvironmentDebugmask#response_json_paths}

---

##### `response_x_paths`<sup>Optional</sup> <a name="response_x_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.responseXPaths"></a>

- *Type:* typing.List[str]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#response_x_paths ApigeeEnvironmentDebugmask#response_x_paths}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#timeouts ApigeeEnvironmentDebugmask#timeouts}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.variables"></a>

- *Type:* typing.List[str]

List of variables that the debug mask applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#variables ApigeeEnvironmentDebugmask#variables}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetFaultXPaths">reset_fault_x_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetNamespaces">reset_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetRequestJsonPaths">reset_request_json_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetRequestXPaths">reset_request_x_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetResponseJsonPaths">reset_response_json_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetResponseXPaths">reset_response_x_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetVariables">reset_variables</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#create ApigeeEnvironmentDebugmask#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#delete ApigeeEnvironmentDebugmask#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#update ApigeeEnvironmentDebugmask#update}.

---

##### `reset_fault_x_paths` <a name="reset_fault_x_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetFaultXPaths"></a>

```python
def reset_fault_x_paths() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespaces` <a name="reset_namespaces" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetNamespaces"></a>

```python
def reset_namespaces() -> None
```

##### `reset_request_json_paths` <a name="reset_request_json_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetRequestJsonPaths"></a>

```python
def reset_request_json_paths() -> None
```

##### `reset_request_x_paths` <a name="reset_request_x_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetRequestXPaths"></a>

```python
def reset_request_x_paths() -> None
```

##### `reset_response_json_paths` <a name="reset_response_json_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetResponseJsonPaths"></a>

```python
def reset_response_json_paths() -> None
```

##### `reset_response_x_paths` <a name="reset_response_x_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetResponseXPaths"></a>

```python
def reset_response_x_paths() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_variables` <a name="reset_variables" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetVariables"></a>

```python
def reset_variables() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isConstruct"></a>

```python
from cdktn_provider_google import apigee_environment_debugmask

apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformElement"></a>

```python
from cdktn_provider_google import apigee_environment_debugmask

apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformResource"></a>

```python
from cdktn_provider_google import apigee_environment_debugmask

apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport"></a>

```python
from cdktn_provider_google import apigee_environment_debugmask

apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeEnvironmentDebugmask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeEnvironmentDebugmask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentDebugmask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference">ApigeeEnvironmentDebugmaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.envIdInput">env_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.faultXPathsInput">fault_x_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.namespacesInput">namespaces_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestJsonPathsInput">request_json_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestXPathsInput">request_x_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseJsonPathsInput">response_json_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseXPathsInput">response_x_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.variablesInput">variables_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.envId">env_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.faultXPaths">fault_x_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.namespaces">namespaces</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestJsonPaths">request_json_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestXPaths">request_x_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseJsonPaths">response_json_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseXPaths">response_x_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.variables">variables</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.timeouts"></a>

```python
timeouts: ApigeeEnvironmentDebugmaskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference">ApigeeEnvironmentDebugmaskTimeoutsOutputReference</a>

---

##### `env_id_input`<sup>Optional</sup> <a name="env_id_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.envIdInput"></a>

```python
env_id_input: str
```

- *Type:* str

---

##### `fault_x_paths_input`<sup>Optional</sup> <a name="fault_x_paths_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.faultXPathsInput"></a>

```python
fault_x_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.namespacesInput"></a>

```python
namespaces_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_json_paths_input`<sup>Optional</sup> <a name="request_json_paths_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestJsonPathsInput"></a>

```python
request_json_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_x_paths_input`<sup>Optional</sup> <a name="request_x_paths_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestXPathsInput"></a>

```python
request_x_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_json_paths_input`<sup>Optional</sup> <a name="response_json_paths_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseJsonPathsInput"></a>

```python
response_json_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_x_paths_input`<sup>Optional</sup> <a name="response_x_paths_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseXPathsInput"></a>

```python
response_x_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApigeeEnvironmentDebugmaskTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a>

---

##### `variables_input`<sup>Optional</sup> <a name="variables_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.variablesInput"></a>

```python
variables_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.envId"></a>

```python
env_id: str
```

- *Type:* str

---

##### `fault_x_paths`<sup>Required</sup> <a name="fault_x_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.faultXPaths"></a>

```python
fault_x_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.namespaces"></a>

```python
namespaces: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_json_paths`<sup>Required</sup> <a name="request_json_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestJsonPaths"></a>

```python
request_json_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_x_paths`<sup>Required</sup> <a name="request_x_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestXPaths"></a>

```python
request_x_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_json_paths`<sup>Required</sup> <a name="response_json_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseJsonPaths"></a>

```python
response_json_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_x_paths`<sup>Required</sup> <a name="response_x_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseXPaths"></a>

```python
response_x_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.variables"></a>

```python
variables: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentDebugmaskConfig <a name="ApigeeEnvironmentDebugmaskConfig" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.Initializer"></a>

```python
from cdktn_provider_google import apigee_environment_debugmask

apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  env_id: str,
  fault_x_paths: typing.List[str] = None,
  id: str = None,
  namespaces: typing.Mapping[str] = None,
  request_json_paths: typing.List[str] = None,
  request_x_paths: typing.List[str] = None,
  response_json_paths: typing.List[str] = None,
  response_x_paths: typing.List[str] = None,
  timeouts: ApigeeEnvironmentDebugmaskTimeouts = None,
  variables: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.envId">env_id</a></code> | <code>str</code> | The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.faultXPaths">fault_x_paths</a></code> | <code>typing.List[str]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#id ApigeeEnvironmentDebugmask#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.namespaces">namespaces</a></code> | <code>typing.Mapping[str]</code> | Map of namespaces to URIs. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.requestJsonPaths">request_json_paths</a></code> | <code>typing.List[str]</code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.requestXPaths">request_x_paths</a></code> | <code>typing.List[str]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.responseJsonPaths">response_json_paths</a></code> | <code>typing.List[str]</code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.responseXPaths">response_x_paths</a></code> | <code>typing.List[str]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.variables">variables</a></code> | <code>typing.List[str]</code> | List of variables that the debug mask applies to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.envId"></a>

```python
env_id: str
```

- *Type:* str

The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#env_id ApigeeEnvironmentDebugmask#env_id}

---

##### `fault_x_paths`<sup>Optional</sup> <a name="fault_x_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.faultXPaths"></a>

```python
fault_x_paths: typing.List[str]
```

- *Type:* typing.List[str]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#fault_x_paths ApigeeEnvironmentDebugmask#fault_x_paths}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#id ApigeeEnvironmentDebugmask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.namespaces"></a>

```python
namespaces: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of namespaces to URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#namespaces ApigeeEnvironmentDebugmask#namespaces}

---

##### `request_json_paths`<sup>Optional</sup> <a name="request_json_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.requestJsonPaths"></a>

```python
request_json_paths: typing.List[str]
```

- *Type:* typing.List[str]

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#request_json_paths ApigeeEnvironmentDebugmask#request_json_paths}

---

##### `request_x_paths`<sup>Optional</sup> <a name="request_x_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.requestXPaths"></a>

```python
request_x_paths: typing.List[str]
```

- *Type:* typing.List[str]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#request_x_paths ApigeeEnvironmentDebugmask#request_x_paths}

---

##### `response_json_paths`<sup>Optional</sup> <a name="response_json_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.responseJsonPaths"></a>

```python
response_json_paths: typing.List[str]
```

- *Type:* typing.List[str]

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#response_json_paths ApigeeEnvironmentDebugmask#response_json_paths}

---

##### `response_x_paths`<sup>Optional</sup> <a name="response_x_paths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.responseXPaths"></a>

```python
response_x_paths: typing.List[str]
```

- *Type:* typing.List[str]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#response_x_paths ApigeeEnvironmentDebugmask#response_x_paths}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.timeouts"></a>

```python
timeouts: ApigeeEnvironmentDebugmaskTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#timeouts ApigeeEnvironmentDebugmask#timeouts}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.variables"></a>

```python
variables: typing.List[str]
```

- *Type:* typing.List[str]

List of variables that the debug mask applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#variables ApigeeEnvironmentDebugmask#variables}

---

### ApigeeEnvironmentDebugmaskTimeouts <a name="ApigeeEnvironmentDebugmaskTimeouts" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.Initializer"></a>

```python
from cdktn_provider_google import apigee_environment_debugmask

apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#create ApigeeEnvironmentDebugmask#create}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#delete ApigeeEnvironmentDebugmask#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#update ApigeeEnvironmentDebugmask#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#create ApigeeEnvironmentDebugmask#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#delete ApigeeEnvironmentDebugmask#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_debugmask#update ApigeeEnvironmentDebugmask#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentDebugmaskTimeoutsOutputReference <a name="ApigeeEnvironmentDebugmaskTimeoutsOutputReference" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_environment_debugmask

apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigeeEnvironmentDebugmaskTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a>

---



