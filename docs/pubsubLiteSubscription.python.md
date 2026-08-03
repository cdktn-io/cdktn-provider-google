# `pubsubLiteSubscription` Submodule <a name="`pubsubLiteSubscription` Submodule" id="@cdktn/provider-google.pubsubLiteSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubLiteSubscription <a name="PubsubLiteSubscription" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription google_pubsub_lite_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer"></a>

```python
from cdktn_provider_google import pubsub_lite_subscription

pubsubLiteSubscription.PubsubLiteSubscription(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  topic: str,
  deletion_policy: str = None,
  delivery_config: PubsubLiteSubscriptionDeliveryConfig = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: PubsubLiteSubscriptionTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the subscription. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.topic">topic</a></code> | <code>str</code> | A reference to a Topic resource. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.deliveryConfig">delivery_config</a></code> | <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a></code> | delivery_config block. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#id PubsubLiteSubscription#id}. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#project PubsubLiteSubscription#project}. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the pubsub lite topic. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The zone of the pubsub lite topic. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.name"></a>

- *Type:* str

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#name PubsubLiteSubscription#name}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.topic"></a>

- *Type:* str

A reference to a Topic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#topic PubsubLiteSubscription#topic}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#deletion_policy PubsubLiteSubscription#deletion_policy}

---

##### `delivery_config`<sup>Optional</sup> <a name="delivery_config" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.deliveryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a>

delivery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#delivery_config PubsubLiteSubscription#delivery_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#id PubsubLiteSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#project PubsubLiteSubscription#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.region"></a>

- *Type:* str

The region of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#region PubsubLiteSubscription#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#timeouts PubsubLiteSubscription#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.zone"></a>

- *Type:* str

The zone of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#zone PubsubLiteSubscription#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putDeliveryConfig">put_delivery_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetDeliveryConfig">reset_delivery_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_delivery_config` <a name="put_delivery_config" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putDeliveryConfig"></a>

```python
def put_delivery_config(
  delivery_requirement: str
) -> None
```

###### `delivery_requirement`<sup>Required</sup> <a name="delivery_requirement" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putDeliveryConfig.parameter.deliveryRequirement"></a>

- *Type:* str

When this subscription should send messages to subscribers relative to messages persistence in storage. Possible values: ["DELIVER_IMMEDIATELY", "DELIVER_AFTER_STORED", "DELIVERY_REQUIREMENT_UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#delivery_requirement PubsubLiteSubscription#delivery_requirement}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#create PubsubLiteSubscription#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#delete PubsubLiteSubscription#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#update PubsubLiteSubscription#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_delivery_config` <a name="reset_delivery_config" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetDeliveryConfig"></a>

```python
def reset_delivery_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PubsubLiteSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isConstruct"></a>

```python
from cdktn_provider_google import pubsub_lite_subscription

pubsubLiteSubscription.PubsubLiteSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isTerraformElement"></a>

```python
from cdktn_provider_google import pubsub_lite_subscription

pubsubLiteSubscription.PubsubLiteSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isTerraformResource"></a>

```python
from cdktn_provider_google import pubsub_lite_subscription

pubsubLiteSubscription.PubsubLiteSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.generateConfigForImport"></a>

```python
from cdktn_provider_google import pubsub_lite_subscription

pubsubLiteSubscription.PubsubLiteSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PubsubLiteSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PubsubLiteSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PubsubLiteSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PubsubLiteSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.deliveryConfig">delivery_config</a></code> | <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference">PubsubLiteSubscriptionDeliveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference">PubsubLiteSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.deliveryConfigInput">delivery_config_input</a></code> | <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `delivery_config`<sup>Required</sup> <a name="delivery_config" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.deliveryConfig"></a>

```python
delivery_config: PubsubLiteSubscriptionDeliveryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference">PubsubLiteSubscriptionDeliveryConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.timeouts"></a>

```python
timeouts: PubsubLiteSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference">PubsubLiteSubscriptionTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `delivery_config_input`<sup>Optional</sup> <a name="delivery_config_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.deliveryConfigInput"></a>

```python
delivery_config_input: PubsubLiteSubscriptionDeliveryConfig
```

- *Type:* <a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | PubsubLiteSubscriptionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a>

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubLiteSubscriptionConfig <a name="PubsubLiteSubscriptionConfig" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.Initializer"></a>

```python
from cdktn_provider_google import pubsub_lite_subscription

pubsubLiteSubscription.PubsubLiteSubscriptionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  topic: str,
  deletion_policy: str = None,
  delivery_config: PubsubLiteSubscriptionDeliveryConfig = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: PubsubLiteSubscriptionTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.name">name</a></code> | <code>str</code> | Name of the subscription. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.topic">topic</a></code> | <code>str</code> | A reference to a Topic resource. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.deliveryConfig">delivery_config</a></code> | <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a></code> | delivery_config block. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#id PubsubLiteSubscription#id}. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#project PubsubLiteSubscription#project}. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.region">region</a></code> | <code>str</code> | The region of the pubsub lite topic. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.zone">zone</a></code> | <code>str</code> | The zone of the pubsub lite topic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#name PubsubLiteSubscription#name}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.topic"></a>

```python
topic: str
```

- *Type:* str

A reference to a Topic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#topic PubsubLiteSubscription#topic}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#deletion_policy PubsubLiteSubscription#deletion_policy}

---

##### `delivery_config`<sup>Optional</sup> <a name="delivery_config" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.deliveryConfig"></a>

```python
delivery_config: PubsubLiteSubscriptionDeliveryConfig
```

- *Type:* <a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a>

delivery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#delivery_config PubsubLiteSubscription#delivery_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#id PubsubLiteSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#project PubsubLiteSubscription#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#region PubsubLiteSubscription#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.timeouts"></a>

```python
timeouts: PubsubLiteSubscriptionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#timeouts PubsubLiteSubscription#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#zone PubsubLiteSubscription#zone}

---

### PubsubLiteSubscriptionDeliveryConfig <a name="PubsubLiteSubscriptionDeliveryConfig" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig.Initializer"></a>

```python
from cdktn_provider_google import pubsub_lite_subscription

pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig(
  delivery_requirement: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig.property.deliveryRequirement">delivery_requirement</a></code> | <code>str</code> | When this subscription should send messages to subscribers relative to messages persistence in storage. Possible values: ["DELIVER_IMMEDIATELY", "DELIVER_AFTER_STORED", "DELIVERY_REQUIREMENT_UNSPECIFIED"]. |

---

##### `delivery_requirement`<sup>Required</sup> <a name="delivery_requirement" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig.property.deliveryRequirement"></a>

```python
delivery_requirement: str
```

- *Type:* str

When this subscription should send messages to subscribers relative to messages persistence in storage. Possible values: ["DELIVER_IMMEDIATELY", "DELIVER_AFTER_STORED", "DELIVERY_REQUIREMENT_UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#delivery_requirement PubsubLiteSubscription#delivery_requirement}

---

### PubsubLiteSubscriptionTimeouts <a name="PubsubLiteSubscriptionTimeouts" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.Initializer"></a>

```python
from cdktn_provider_google import pubsub_lite_subscription

pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#create PubsubLiteSubscription#create}. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#delete PubsubLiteSubscription#delete}. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#update PubsubLiteSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#create PubsubLiteSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#delete PubsubLiteSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/pubsub_lite_subscription#update PubsubLiteSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubLiteSubscriptionDeliveryConfigOutputReference <a name="PubsubLiteSubscriptionDeliveryConfigOutputReference" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import pubsub_lite_subscription

pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.deliveryRequirementInput">delivery_requirement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.deliveryRequirement">delivery_requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_requirement_input`<sup>Optional</sup> <a name="delivery_requirement_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.deliveryRequirementInput"></a>

```python
delivery_requirement_input: str
```

- *Type:* str

---

##### `delivery_requirement`<sup>Required</sup> <a name="delivery_requirement" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.deliveryRequirement"></a>

```python
delivery_requirement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.internalValue"></a>

```python
internal_value: PubsubLiteSubscriptionDeliveryConfig
```

- *Type:* <a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a>

---


### PubsubLiteSubscriptionTimeoutsOutputReference <a name="PubsubLiteSubscriptionTimeoutsOutputReference" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import pubsub_lite_subscription

pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PubsubLiteSubscriptionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a>

---



