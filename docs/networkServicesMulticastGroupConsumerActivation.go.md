# `networkServicesMulticastGroupConsumerActivation` Submodule <a name="`networkServicesMulticastGroupConsumerActivation` Submodule" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastGroupConsumerActivation <a name="NetworkServicesMulticastGroupConsumerActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation google_network_services_multicast_group_consumer_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

networkservicesmulticastgroupconsumeractivation.NewNetworkServicesMulticastGroupConsumerActivation(scope Construct, id *string, config NetworkServicesMulticastGroupConsumerActivationConfig) NetworkServicesMulticastGroupConsumerActivation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig">NetworkServicesMulticastGroupConsumerActivationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig">NetworkServicesMulticastGroupConsumerActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putLogConfig"></a>

```go
func PutLogConfig(value NetworkServicesMulticastGroupConsumerActivationLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putTimeouts"></a>

```go
func PutTimeouts(value NetworkServicesMulticastGroupConsumerActivationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastGroupConsumerActivation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

networkservicesmulticastgroupconsumeractivation.NetworkServicesMulticastGroupConsumerActivation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

networkservicesmulticastgroupconsumeractivation.NetworkServicesMulticastGroupConsumerActivation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

networkservicesmulticastgroupconsumeractivation.NetworkServicesMulticastGroupConsumerActivation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

networkservicesmulticastgroupconsumeractivation.NetworkServicesMulticastGroupConsumerActivation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkServicesMulticastGroupConsumerActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkServicesMulticastGroupConsumerActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkServicesMulticastGroupConsumerActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastGroupConsumerActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference">NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.state">State</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList">NetworkServicesMulticastGroupConsumerActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference">NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociationInput">MulticastConsumerAssociationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationIdInput">MulticastGroupConsumerActivationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivationInput">MulticastGroupRangeActivationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociation">MulticastConsumerAssociation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationId">MulticastGroupConsumerActivationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivation">MulticastGroupRangeActivation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfig"></a>

```go
func LogConfig() NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference">NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.state"></a>

```go
func State() NetworkServicesMulticastGroupConsumerActivationStateList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList">NetworkServicesMulticastGroupConsumerActivationStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeouts"></a>

```go
func Timeouts() NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference">NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfigInput"></a>

```go
func LogConfigInput() NetworkServicesMulticastGroupConsumerActivationLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---

##### `MulticastConsumerAssociationInput`<sup>Optional</sup> <a name="MulticastConsumerAssociationInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociationInput"></a>

```go
func MulticastConsumerAssociationInput() *string
```

- *Type:* *string

---

##### `MulticastGroupConsumerActivationIdInput`<sup>Optional</sup> <a name="MulticastGroupConsumerActivationIdInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationIdInput"></a>

```go
func MulticastGroupConsumerActivationIdInput() *string
```

- *Type:* *string

---

##### `MulticastGroupRangeActivationInput`<sup>Optional</sup> <a name="MulticastGroupRangeActivationInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivationInput"></a>

```go
func MulticastGroupRangeActivationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MulticastConsumerAssociation`<sup>Required</sup> <a name="MulticastConsumerAssociation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociation"></a>

```go
func MulticastConsumerAssociation() *string
```

- *Type:* *string

---

##### `MulticastGroupConsumerActivationId`<sup>Required</sup> <a name="MulticastGroupConsumerActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationId"></a>

```go
func MulticastGroupConsumerActivationId() *string
```

- *Type:* *string

---

##### `MulticastGroupRangeActivation`<sup>Required</sup> <a name="MulticastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivation"></a>

```go
func MulticastGroupRangeActivation() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastGroupConsumerActivationConfig <a name="NetworkServicesMulticastGroupConsumerActivationConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

&networkservicesmulticastgroupconsumeractivation.NetworkServicesMulticastGroupConsumerActivationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MulticastConsumerAssociation: *string,
	MulticastGroupConsumerActivationId: *string,
	MulticastGroupRangeActivation: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	LogConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastConsumerAssociation">MulticastConsumerAssociation</a></code> | <code>*string</code> | The resource name of the multicast consumer association that is in the same zone as this multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupConsumerActivationId">MulticastGroupConsumerActivationId</a></code> | <code>*string</code> | A unique name for the multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupRangeActivation">MulticastGroupRangeActivation</a></code> | <code>*string</code> | The resource name of the multicast group range activation created by the admin in the same zone as this multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.description">Description</a></code> | <code>*string</code> | An optional text description of the multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#id NetworkServicesMulticastGroupConsumerActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#project NetworkServicesMulticastGroupConsumerActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#location NetworkServicesMulticastGroupConsumerActivation#location}

---

##### `MulticastConsumerAssociation`<sup>Required</sup> <a name="MulticastConsumerAssociation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastConsumerAssociation"></a>

```go
MulticastConsumerAssociation *string
```

- *Type:* *string

The resource name of the multicast consumer association that is in the same zone as this multicast group consumer activation.

Use the following format:
'projects/* /locations/* /multicastConsumerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_consumer_association NetworkServicesMulticastGroupConsumerActivation#multicast_consumer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `MulticastGroupConsumerActivationId`<sup>Required</sup> <a name="MulticastGroupConsumerActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupConsumerActivationId"></a>

```go
MulticastGroupConsumerActivationId *string
```

- *Type:* *string

A unique name for the multicast group consumer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_group_consumer_activation_id NetworkServicesMulticastGroupConsumerActivation#multicast_group_consumer_activation_id}

---

##### `MulticastGroupRangeActivation`<sup>Required</sup> <a name="MulticastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupRangeActivation"></a>

```go
MulticastGroupRangeActivation *string
```

- *Type:* *string

The resource name of the multicast group range activation created by the admin in the same zone as this multicast group consumer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_group_range_activation NetworkServicesMulticastGroupConsumerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional text description of the multicast group consumer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#description NetworkServicesMulticastGroupConsumerActivation#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#id NetworkServicesMulticastGroupConsumerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#labels NetworkServicesMulticastGroupConsumerActivation#labels}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.logConfig"></a>

```go
LogConfig NetworkServicesMulticastGroupConsumerActivationLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#log_config NetworkServicesMulticastGroupConsumerActivation#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#project NetworkServicesMulticastGroupConsumerActivation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.timeouts"></a>

```go
Timeouts NetworkServicesMulticastGroupConsumerActivationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#timeouts NetworkServicesMulticastGroupConsumerActivation#timeouts}

---

### NetworkServicesMulticastGroupConsumerActivationLogConfig <a name="NetworkServicesMulticastGroupConsumerActivationLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

&networkservicesmulticastgroupconsumeractivation.NetworkServicesMulticastGroupConsumerActivationLogConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether to enable logging or not. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#enabled NetworkServicesMulticastGroupConsumerActivation#enabled}

---

### NetworkServicesMulticastGroupConsumerActivationState <a name="NetworkServicesMulticastGroupConsumerActivationState" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

&networkservicesmulticastgroupconsumeractivation.NetworkServicesMulticastGroupConsumerActivationState {

}
```


### NetworkServicesMulticastGroupConsumerActivationTimeouts <a name="NetworkServicesMulticastGroupConsumerActivationTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

&networkservicesmulticastgroupconsumeractivation.NetworkServicesMulticastGroupConsumerActivationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#create NetworkServicesMulticastGroupConsumerActivation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#delete NetworkServicesMulticastGroupConsumerActivation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#update NetworkServicesMulticastGroupConsumerActivation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#create NetworkServicesMulticastGroupConsumerActivation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#delete NetworkServicesMulticastGroupConsumerActivation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_group_consumer_activation#update NetworkServicesMulticastGroupConsumerActivation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference <a name="NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

networkservicesmulticastgroupconsumeractivation.NewNetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesMulticastGroupConsumerActivationLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---


### NetworkServicesMulticastGroupConsumerActivationStateList <a name="NetworkServicesMulticastGroupConsumerActivationStateList" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

networkservicesmulticastgroupconsumeractivation.NewNetworkServicesMulticastGroupConsumerActivationStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesMulticastGroupConsumerActivationStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.get"></a>

```go
func Get(index *f64) NetworkServicesMulticastGroupConsumerActivationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkServicesMulticastGroupConsumerActivationStateOutputReference <a name="NetworkServicesMulticastGroupConsumerActivationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

networkservicesmulticastgroupconsumeractivation.NewNetworkServicesMulticastGroupConsumerActivationStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesMulticastGroupConsumerActivationStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState">NetworkServicesMulticastGroupConsumerActivationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesMulticastGroupConsumerActivationState
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState">NetworkServicesMulticastGroupConsumerActivationState</a>

---


### NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference <a name="NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgroupconsumeractivation"

networkservicesmulticastgroupconsumeractivation.NewNetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



