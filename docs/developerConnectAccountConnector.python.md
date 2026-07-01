# `developerConnectAccountConnector` Submodule <a name="`developerConnectAccountConnector` Submodule" id="@cdktn/provider-google.developerConnectAccountConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeveloperConnectAccountConnector <a name="DeveloperConnectAccountConnector" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector google_developer_connect_account_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_connector_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  custom_oauth_config: DeveloperConnectAccountConnectorCustomOauthConfig = None,
  deletion_policy: str = None,
  etag: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  provider_oauth_config: DeveloperConnectAccountConnectorProviderOauthConfig = None,
  proxy_config: DeveloperConnectAccountConnectorProxyConfig = None,
  timeouts: DeveloperConnectAccountConnectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.accountConnectorId">account_connector_id</a></code> | <code>str</code> | The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Allows users to store small amounts of arbitrary data. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.customOauthConfig">custom_oauth_config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig">DeveloperConnectAccountConnectorCustomOauthConfig</a></code> | custom_oauth_config block. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.etag">etag</a></code> | <code>str</code> | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.providerOauthConfig">provider_oauth_config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | provider_oauth_config block. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig">DeveloperConnectAccountConnectorProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_connector_id`<sup>Required</sup> <a name="account_connector_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.accountConnectorId"></a>

- *Type:* str

The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name.

Its format should adhere
to https://google.aip.dev/122#resource-id-segments Names must be unique
per-project per-location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#account_connector_id DeveloperConnectAccountConnector#account_connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#location DeveloperConnectAccountConnector#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Allows users to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#annotations DeveloperConnectAccountConnector#annotations}

---

##### `custom_oauth_config`<sup>Optional</sup> <a name="custom_oauth_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.customOauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig">DeveloperConnectAccountConnectorCustomOauthConfig</a>

custom_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#custom_oauth_config DeveloperConnectAccountConnector#custom_oauth_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#deletion_policy DeveloperConnectAccountConnector#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.etag"></a>

- *Type:* str

This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#etag DeveloperConnectAccountConnector#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#labels DeveloperConnectAccountConnector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}.

---

##### `provider_oauth_config`<sup>Optional</sup> <a name="provider_oauth_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.providerOauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

provider_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#provider_oauth_config DeveloperConnectAccountConnector#provider_oauth_config}

---

##### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.proxyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig">DeveloperConnectAccountConnectorProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#proxy_config DeveloperConnectAccountConnector#proxy_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#timeouts DeveloperConnectAccountConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putCustomOauthConfig">put_custom_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig">put_provider_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProxyConfig">put_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetCustomOauthConfig">reset_custom_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProviderOauthConfig">reset_provider_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProxyConfig">reset_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_oauth_config` <a name="put_custom_oauth_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putCustomOauthConfig"></a>

```python
def put_custom_oauth_config(
  auth_uri: str,
  client_id: str,
  client_secret: str,
  host_uri: str,
  scm_provider: str,
  scopes: typing.List[str],
  token_uri: str,
  pkce_disabled: bool | IResolvable = None,
  service_directory_config: DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig = None,
  ssl_ca_certificate: str = None
) -> None
```

###### `auth_uri`<sup>Required</sup> <a name="auth_uri" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putCustomOauthConfig.parameter.authUri"></a>

- *Type:* str

The OAuth2 authrization server URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#auth_uri DeveloperConnectAccountConnector#auth_uri}

---

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putCustomOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID of the OAuth application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#client_id DeveloperConnectAccountConnector#client_id}

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putCustomOauthConfig.parameter.clientSecret"></a>

- *Type:* str

Input only.

The client secret of the OAuth application.
It will be provided as plain text, but encrypted and stored in developer
connect. As INPUT_ONLY field, it will not be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#client_secret DeveloperConnectAccountConnector#client_secret}

---

###### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putCustomOauthConfig.parameter.hostUri"></a>

- *Type:* str

The host URI of the OAuth application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#host_uri DeveloperConnectAccountConnector#host_uri}

---

###### `scm_provider`<sup>Required</sup> <a name="scm_provider" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putCustomOauthConfig.parameter.scmProvider"></a>

- *Type:* str

The type of the SCM provider. Possible values: SCM_PROVIDER_UNKNOWN GITHUB_ENTERPRISE GITLAB_ENTERPRISE BITBUCKET_DATA_CENTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#scm_provider DeveloperConnectAccountConnector#scm_provider}

---

###### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putCustomOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The scopes to be requested during OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#scopes DeveloperConnectAccountConnector#scopes}

---

###### `token_uri`<sup>Required</sup> <a name="token_uri" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putCustomOauthConfig.parameter.tokenUri"></a>

- *Type:* str

The OAuth2 token request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#token_uri DeveloperConnectAccountConnector#token_uri}

---

###### `pkce_disabled`<sup>Optional</sup> <a name="pkce_disabled" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putCustomOauthConfig.parameter.pkceDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Disable PKCE for this OAuth config. PKCE is enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#pkce_disabled DeveloperConnectAccountConnector#pkce_disabled}

---

###### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putCustomOauthConfig.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#service_directory_config DeveloperConnectAccountConnector#service_directory_config}

---

###### `ssl_ca_certificate`<sup>Optional</sup> <a name="ssl_ca_certificate" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putCustomOauthConfig.parameter.sslCaCertificate"></a>

- *Type:* str

SSL certificate to use for requests to a private service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#ssl_ca_certificate DeveloperConnectAccountConnector#ssl_ca_certificate}

---

##### `put_provider_oauth_config` <a name="put_provider_oauth_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig"></a>

```python
def put_provider_oauth_config(
  scopes: typing.List[str],
  system_provider_id: str = None
) -> None
```

###### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

User selected scopes to apply to the Oauth config In the event of changing scopes, user records under AccountConnector will be deleted and users will re-auth again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#scopes DeveloperConnectAccountConnector#scopes}

---

###### `system_provider_id`<sup>Optional</sup> <a name="system_provider_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig.parameter.systemProviderId"></a>

- *Type:* str

Possible values: GITHUB GITLAB GOOGLE SENTRY ROVO NEW_RELIC DATASTAX DYNATRACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#system_provider_id DeveloperConnectAccountConnector#system_provider_id}

---

##### `put_proxy_config` <a name="put_proxy_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProxyConfig"></a>

```python
def put_proxy_config(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProxyConfig.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Setting this to true allows the git and http proxies to perform actions on behalf of the user configured under the account connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#enabled DeveloperConnectAccountConnector#enabled}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#create DeveloperConnectAccountConnector#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#delete DeveloperConnectAccountConnector#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#update DeveloperConnectAccountConnector#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_custom_oauth_config` <a name="reset_custom_oauth_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetCustomOauthConfig"></a>

```python
def reset_custom_oauth_config() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_provider_oauth_config` <a name="reset_provider_oauth_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProviderOauthConfig"></a>

```python
def reset_provider_oauth_config() -> None
```

##### `reset_proxy_config` <a name="reset_proxy_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProxyConfig"></a>

```python
def reset_proxy_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DeveloperConnectAccountConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isConstruct"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformElement"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformResource"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DeveloperConnectAccountConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DeveloperConnectAccountConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DeveloperConnectAccountConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DeveloperConnectAccountConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.customOauthConfig">custom_oauth_config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference">DeveloperConnectAccountConnectorCustomOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.oauthStartUri">oauth_start_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfig">provider_oauth_config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference">DeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference">DeveloperConnectAccountConnectorProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference">DeveloperConnectAccountConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorIdInput">account_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.customOauthConfigInput">custom_oauth_config_input</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig">DeveloperConnectAccountConnectorCustomOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfigInput">provider_oauth_config_input</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.proxyConfigInput">proxy_config_input</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig">DeveloperConnectAccountConnectorProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorId">account_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `custom_oauth_config`<sup>Required</sup> <a name="custom_oauth_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.customOauthConfig"></a>

```python
custom_oauth_config: DeveloperConnectAccountConnectorCustomOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference">DeveloperConnectAccountConnectorCustomOauthConfigOutputReference</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_start_uri`<sup>Required</sup> <a name="oauth_start_uri" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.oauthStartUri"></a>

```python
oauth_start_uri: str
```

- *Type:* str

---

##### `provider_oauth_config`<sup>Required</sup> <a name="provider_oauth_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfig"></a>

```python
provider_oauth_config: DeveloperConnectAccountConnectorProviderOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference">DeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a>

---

##### `proxy_config`<sup>Required</sup> <a name="proxy_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.proxyConfig"></a>

```python
proxy_config: DeveloperConnectAccountConnectorProxyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference">DeveloperConnectAccountConnectorProxyConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeouts"></a>

```python
timeouts: DeveloperConnectAccountConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference">DeveloperConnectAccountConnectorTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `account_connector_id_input`<sup>Optional</sup> <a name="account_connector_id_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorIdInput"></a>

```python
account_connector_id_input: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `custom_oauth_config_input`<sup>Optional</sup> <a name="custom_oauth_config_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.customOauthConfigInput"></a>

```python
custom_oauth_config_input: DeveloperConnectAccountConnectorCustomOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig">DeveloperConnectAccountConnectorCustomOauthConfig</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `provider_oauth_config_input`<sup>Optional</sup> <a name="provider_oauth_config_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfigInput"></a>

```python
provider_oauth_config_input: DeveloperConnectAccountConnectorProviderOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

---

##### `proxy_config_input`<sup>Optional</sup> <a name="proxy_config_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.proxyConfigInput"></a>

```python
proxy_config_input: DeveloperConnectAccountConnectorProxyConfig
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig">DeveloperConnectAccountConnectorProxyConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DeveloperConnectAccountConnectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

---

##### `account_connector_id`<sup>Required</sup> <a name="account_connector_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorId"></a>

```python
account_connector_id: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DeveloperConnectAccountConnectorConfig <a name="DeveloperConnectAccountConnectorConfig" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_connector_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  custom_oauth_config: DeveloperConnectAccountConnectorCustomOauthConfig = None,
  deletion_policy: str = None,
  etag: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  provider_oauth_config: DeveloperConnectAccountConnectorProviderOauthConfig = None,
  proxy_config: DeveloperConnectAccountConnectorProxyConfig = None,
  timeouts: DeveloperConnectAccountConnectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.accountConnectorId">account_connector_id</a></code> | <code>str</code> | The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Allows users to store small amounts of arbitrary data. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.customOauthConfig">custom_oauth_config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig">DeveloperConnectAccountConnectorCustomOauthConfig</a></code> | custom_oauth_config block. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.etag">etag</a></code> | <code>str</code> | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.providerOauthConfig">provider_oauth_config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | provider_oauth_config block. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig">DeveloperConnectAccountConnectorProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_connector_id`<sup>Required</sup> <a name="account_connector_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.accountConnectorId"></a>

```python
account_connector_id: str
```

- *Type:* str

The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name.

Its format should adhere
to https://google.aip.dev/122#resource-id-segments Names must be unique
per-project per-location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#account_connector_id DeveloperConnectAccountConnector#account_connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#location DeveloperConnectAccountConnector#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Allows users to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#annotations DeveloperConnectAccountConnector#annotations}

---

##### `custom_oauth_config`<sup>Optional</sup> <a name="custom_oauth_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.customOauthConfig"></a>

```python
custom_oauth_config: DeveloperConnectAccountConnectorCustomOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig">DeveloperConnectAccountConnectorCustomOauthConfig</a>

custom_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#custom_oauth_config DeveloperConnectAccountConnector#custom_oauth_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#deletion_policy DeveloperConnectAccountConnector#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#etag DeveloperConnectAccountConnector#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#labels DeveloperConnectAccountConnector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}.

---

##### `provider_oauth_config`<sup>Optional</sup> <a name="provider_oauth_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.providerOauthConfig"></a>

```python
provider_oauth_config: DeveloperConnectAccountConnectorProviderOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

provider_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#provider_oauth_config DeveloperConnectAccountConnector#provider_oauth_config}

---

##### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.proxyConfig"></a>

```python
proxy_config: DeveloperConnectAccountConnectorProxyConfig
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig">DeveloperConnectAccountConnectorProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#proxy_config DeveloperConnectAccountConnector#proxy_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.timeouts"></a>

```python
timeouts: DeveloperConnectAccountConnectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#timeouts DeveloperConnectAccountConnector#timeouts}

---

### DeveloperConnectAccountConnectorCustomOauthConfig <a name="DeveloperConnectAccountConnectorCustomOauthConfig" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig(
  auth_uri: str,
  client_id: str,
  client_secret: str,
  host_uri: str,
  scm_provider: str,
  scopes: typing.List[str],
  token_uri: str,
  pkce_disabled: bool | IResolvable = None,
  service_directory_config: DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig = None,
  ssl_ca_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.authUri">auth_uri</a></code> | <code>str</code> | The OAuth2 authrization server URL. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID of the OAuth application. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Input only. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.hostUri">host_uri</a></code> | <code>str</code> | The host URI of the OAuth application. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.scmProvider">scm_provider</a></code> | <code>str</code> | The type of the SCM provider. Possible values: SCM_PROVIDER_UNKNOWN GITHUB_ENTERPRISE GITLAB_ENTERPRISE BITBUCKET_DATA_CENTER. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The scopes to be requested during OAuth. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.tokenUri">token_uri</a></code> | <code>str</code> | The OAuth2 token request URL. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.pkceDisabled">pkce_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable PKCE for this OAuth config. PKCE is enabled by default. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.sslCaCertificate">ssl_ca_certificate</a></code> | <code>str</code> | SSL certificate to use for requests to a private service. |

---

##### `auth_uri`<sup>Required</sup> <a name="auth_uri" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.authUri"></a>

```python
auth_uri: str
```

- *Type:* str

The OAuth2 authrization server URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#auth_uri DeveloperConnectAccountConnector#auth_uri}

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID of the OAuth application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#client_id DeveloperConnectAccountConnector#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Input only.

The client secret of the OAuth application.
It will be provided as plain text, but encrypted and stored in developer
connect. As INPUT_ONLY field, it will not be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#client_secret DeveloperConnectAccountConnector#client_secret}

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.hostUri"></a>

```python
host_uri: str
```

- *Type:* str

The host URI of the OAuth application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#host_uri DeveloperConnectAccountConnector#host_uri}

---

##### `scm_provider`<sup>Required</sup> <a name="scm_provider" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.scmProvider"></a>

```python
scm_provider: str
```

- *Type:* str

The type of the SCM provider. Possible values: SCM_PROVIDER_UNKNOWN GITHUB_ENTERPRISE GITLAB_ENTERPRISE BITBUCKET_DATA_CENTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#scm_provider DeveloperConnectAccountConnector#scm_provider}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The scopes to be requested during OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#scopes DeveloperConnectAccountConnector#scopes}

---

##### `token_uri`<sup>Required</sup> <a name="token_uri" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.tokenUri"></a>

```python
token_uri: str
```

- *Type:* str

The OAuth2 token request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#token_uri DeveloperConnectAccountConnector#token_uri}

---

##### `pkce_disabled`<sup>Optional</sup> <a name="pkce_disabled" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.pkceDisabled"></a>

```python
pkce_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable PKCE for this OAuth config. PKCE is enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#pkce_disabled DeveloperConnectAccountConnector#pkce_disabled}

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.serviceDirectoryConfig"></a>

```python
service_directory_config: DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#service_directory_config DeveloperConnectAccountConnector#service_directory_config}

---

##### `ssl_ca_certificate`<sup>Optional</sup> <a name="ssl_ca_certificate" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig.property.sslCaCertificate"></a>

```python
ssl_ca_certificate: str
```

- *Type:* str

SSL certificate to use for requests to a private service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#ssl_ca_certificate DeveloperConnectAccountConnector#ssl_ca_certificate}

---

### DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig <a name="DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig(
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.property.service">service</a></code> | <code>str</code> | The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#service DeveloperConnectAccountConnector#service}

---

### DeveloperConnectAccountConnectorProviderOauthConfig <a name="DeveloperConnectAccountConnectorProviderOauthConfig" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig(
  scopes: typing.List[str],
  system_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | User selected scopes to apply to the Oauth config In the event of changing scopes, user records under AccountConnector will be deleted and users will re-auth again. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId">system_provider_id</a></code> | <code>str</code> | Possible values: GITHUB GITLAB GOOGLE SENTRY ROVO NEW_RELIC DATASTAX DYNATRACE. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

User selected scopes to apply to the Oauth config In the event of changing scopes, user records under AccountConnector will be deleted and users will re-auth again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#scopes DeveloperConnectAccountConnector#scopes}

---

##### `system_provider_id`<sup>Optional</sup> <a name="system_provider_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId"></a>

```python
system_provider_id: str
```

- *Type:* str

Possible values: GITHUB GITLAB GOOGLE SENTRY ROVO NEW_RELIC DATASTAX DYNATRACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#system_provider_id DeveloperConnectAccountConnector#system_provider_id}

---

### DeveloperConnectAccountConnectorProxyConfig <a name="DeveloperConnectAccountConnectorProxyConfig" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Setting this to true allows the git and http proxies to perform actions on behalf of the user configured under the account connector. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Setting this to true allows the git and http proxies to perform actions on behalf of the user configured under the account connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#enabled DeveloperConnectAccountConnector#enabled}

---

### DeveloperConnectAccountConnectorTimeouts <a name="DeveloperConnectAccountConnectorTimeouts" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#create DeveloperConnectAccountConnector#create}. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#delete DeveloperConnectAccountConnector#delete}. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#update DeveloperConnectAccountConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#create DeveloperConnectAccountConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#delete DeveloperConnectAccountConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#update DeveloperConnectAccountConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeveloperConnectAccountConnectorCustomOauthConfigOutputReference <a name="DeveloperConnectAccountConnectorCustomOauthConfigOutputReference" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetPkceDisabled">reset_pkce_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetSslCaCertificate">reset_ssl_ca_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  service: str
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.putServiceDirectoryConfig.parameter.service"></a>

- *Type:* str

The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/developer_connect_account_connector#service DeveloperConnectAccountConnector#service}

---

##### `reset_pkce_disabled` <a name="reset_pkce_disabled" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetPkceDisabled"></a>

```python
def reset_pkce_disabled() -> None
```

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_ssl_ca_certificate` <a name="reset_ssl_ca_certificate" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetSslCaCertificate"></a>

```python
def reset_ssl_ca_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serverVersion">server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference">DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUriInput">auth_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUriInput">host_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabledInput">pkce_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProviderInput">scm_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificateInput">ssl_ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUriInput">token_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUri">auth_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUri">host_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabled">pkce_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProvider">scm_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificate">ssl_ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUri">token_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig">DeveloperConnectAccountConnectorCustomOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_version`<sup>Required</sup> <a name="server_version" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serverVersion"></a>

```python
server_version: str
```

- *Type:* str

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference">DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference</a>

---

##### `auth_uri_input`<sup>Optional</sup> <a name="auth_uri_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUriInput"></a>

```python
auth_uri_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `host_uri_input`<sup>Optional</sup> <a name="host_uri_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUriInput"></a>

```python
host_uri_input: str
```

- *Type:* str

---

##### `pkce_disabled_input`<sup>Optional</sup> <a name="pkce_disabled_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabledInput"></a>

```python
pkce_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scm_provider_input`<sup>Optional</sup> <a name="scm_provider_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProviderInput"></a>

```python
scm_provider_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

---

##### `ssl_ca_certificate_input`<sup>Optional</sup> <a name="ssl_ca_certificate_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificateInput"></a>

```python
ssl_ca_certificate_input: str
```

- *Type:* str

---

##### `token_uri_input`<sup>Optional</sup> <a name="token_uri_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUriInput"></a>

```python
token_uri_input: str
```

- *Type:* str

---

##### `auth_uri`<sup>Required</sup> <a name="auth_uri" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUri"></a>

```python
auth_uri: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUri"></a>

```python
host_uri: str
```

- *Type:* str

---

##### `pkce_disabled`<sup>Required</sup> <a name="pkce_disabled" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabled"></a>

```python
pkce_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scm_provider`<sup>Required</sup> <a name="scm_provider" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProvider"></a>

```python
scm_provider: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssl_ca_certificate`<sup>Required</sup> <a name="ssl_ca_certificate" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificate"></a>

```python
ssl_ca_certificate: str
```

- *Type:* str

---

##### `token_uri`<sup>Required</sup> <a name="token_uri" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUri"></a>

```python
token_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectAccountConnectorCustomOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfig">DeveloperConnectAccountConnectorCustomOauthConfig</a>

---


### DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference <a name="DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

---


### DeveloperConnectAccountConnectorProviderOauthConfigOutputReference <a name="DeveloperConnectAccountConnectorProviderOauthConfigOutputReference" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId">reset_system_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_system_provider_id` <a name="reset_system_provider_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId"></a>

```python
def reset_system_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput">system_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId">system_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_provider_id_input`<sup>Optional</sup> <a name="system_provider_id_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput"></a>

```python
system_provider_id_input: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_provider_id`<sup>Required</sup> <a name="system_provider_id" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId"></a>

```python
system_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectAccountConnectorProviderOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

---


### DeveloperConnectAccountConnectorProxyConfigOutputReference <a name="DeveloperConnectAccountConnectorProxyConfigOutputReference" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig">DeveloperConnectAccountConnectorProxyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectAccountConnectorProxyConfig
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProxyConfig">DeveloperConnectAccountConnectorProxyConfig</a>

---


### DeveloperConnectAccountConnectorTimeoutsOutputReference <a name="DeveloperConnectAccountConnectorTimeoutsOutputReference" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeveloperConnectAccountConnectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

---



