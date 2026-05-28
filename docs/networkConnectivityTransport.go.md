# `networkConnectivityTransport` Submodule <a name="`networkConnectivityTransport` Submodule" id="@cdktn/provider-google.networkConnectivityTransport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityTransport <a name="NetworkConnectivityTransport" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport google_network_connectivity_transport}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitytransport"

networkconnectivitytransport.NewNetworkConnectivityTransport(scope Construct, id *string, config NetworkConnectivityTransportConfig) NetworkConnectivityTransport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig">NetworkConnectivityTransportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig">NetworkConnectivityTransportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetAdvertisedRoutes">ResetAdvertisedRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetMtuLimit">ResetMtuLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProvidedActivationKey">ResetProvidedActivationKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetRemoteAccountId">ResetRemoteAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts"></a>

```go
func PutTimeouts(value NetworkConnectivityTransportTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

---

##### `ResetAdvertisedRoutes` <a name="ResetAdvertisedRoutes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetAdvertisedRoutes"></a>

```go
func ResetAdvertisedRoutes()
```

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetBandwidth"></a>

```go
func ResetBandwidth()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMtuLimit` <a name="ResetMtuLimit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetMtuLimit"></a>

```go
func ResetMtuLimit()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProvidedActivationKey` <a name="ResetProvidedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProvidedActivationKey"></a>

```go
func ResetProvidedActivationKey()
```

##### `ResetRemoteAccountId` <a name="ResetRemoteAccountId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetRemoteAccountId"></a>

```go
func ResetRemoteAccountId()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetStackType"></a>

```go
func ResetStackType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkConnectivityTransport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitytransport"

networkconnectivitytransport.NetworkConnectivityTransport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitytransport"

networkconnectivitytransport.NetworkConnectivityTransport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitytransport"

networkconnectivitytransport.NetworkConnectivityTransport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitytransport"

networkconnectivitytransport.NetworkConnectivityTransport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkConnectivityTransport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkConnectivityTransport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkConnectivityTransport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityTransport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.generatedActivationKey">GeneratedActivationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.peeringNetwork">PeeringNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference">NetworkConnectivityTransportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutesInput">AdvertisedRoutesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidthInput">BandwidthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimitInput">MtuLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKeyInput">ProvidedActivationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountIdInput">RemoteAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfileInput">RemoteProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackTypeInput">StackTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutes">AdvertisedRoutes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidth">Bandwidth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimit">MtuLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKey">ProvidedActivationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountId">RemoteAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfile">RemoteProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackType">StackType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `GeneratedActivationKey`<sup>Required</sup> <a name="GeneratedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.generatedActivationKey"></a>

```go
func GeneratedActivationKey() *string
```

- *Type:* *string

---

##### `PeeringNetwork`<sup>Required</sup> <a name="PeeringNetwork" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.peeringNetwork"></a>

```go
func PeeringNetwork() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeouts"></a>

```go
func Timeouts() NetworkConnectivityTransportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference">NetworkConnectivityTransportTimeoutsOutputReference</a>

---

##### `AdvertisedRoutesInput`<sup>Optional</sup> <a name="AdvertisedRoutesInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutesInput"></a>

```go
func AdvertisedRoutesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidthInput"></a>

```go
func BandwidthInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MtuLimitInput`<sup>Optional</sup> <a name="MtuLimitInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimitInput"></a>

```go
func MtuLimitInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProvidedActivationKeyInput`<sup>Optional</sup> <a name="ProvidedActivationKeyInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKeyInput"></a>

```go
func ProvidedActivationKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RemoteAccountIdInput`<sup>Optional</sup> <a name="RemoteAccountIdInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountIdInput"></a>

```go
func RemoteAccountIdInput() *string
```

- *Type:* *string

---

##### `RemoteProfileInput`<sup>Optional</sup> <a name="RemoteProfileInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfileInput"></a>

```go
func RemoteProfileInput() *string
```

- *Type:* *string

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackTypeInput"></a>

```go
func StackTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdvertisedRoutes`<sup>Required</sup> <a name="AdvertisedRoutes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutes"></a>

```go
func AdvertisedRoutes() *[]*string
```

- *Type:* *[]*string

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidth"></a>

```go
func Bandwidth() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MtuLimit`<sup>Required</sup> <a name="MtuLimit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimit"></a>

```go
func MtuLimit() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProvidedActivationKey`<sup>Required</sup> <a name="ProvidedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKey"></a>

```go
func ProvidedActivationKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RemoteAccountId`<sup>Required</sup> <a name="RemoteAccountId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountId"></a>

```go
func RemoteAccountId() *string
```

- *Type:* *string

---

##### `RemoteProfile`<sup>Required</sup> <a name="RemoteProfile" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfile"></a>

```go
func RemoteProfile() *string
```

- *Type:* *string

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackType"></a>

```go
func StackType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityTransportConfig <a name="NetworkConnectivityTransportConfig" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitytransport"

&networkconnectivitytransport.NetworkConnectivityTransportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Network: *string,
	Region: *string,
	RemoteProfile: *string,
	AdvertisedRoutes: *[]*string,
	Bandwidth: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	MtuLimit: *f64,
	Project: *string,
	ProvidedActivationKey: *string,
	RemoteAccountId: *string,
	StackType: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkConnectivityTransport.NetworkConnectivityTransportTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource, see google.aip.dev/122 for resource naming. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.network">Network</a></code> | <code>*string</code> | Resource URL of the Network that will be peered with this Transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.region">Region</a></code> | <code>*string</code> | The region of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteProfile">RemoteProfile</a></code> | <code>*string</code> | Resource URL of the remoteTransportProfile that this Transport is connecting to. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.advertisedRoutes">AdvertisedRoutes</a></code> | <code>*[]*string</code> | List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.bandwidth">Bandwidth</a></code> | <code>*string</code> | Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#id NetworkConnectivityTransport#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.mtuLimit">MtuLimit</a></code> | <code>*f64</code> | [Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#project NetworkConnectivityTransport#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.providedActivationKey">ProvidedActivationKey</a></code> | <code>*string</code> | Key used for establishing a connection with the remote transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteAccountId">RemoteAccountId</a></code> | <code>*string</code> | The user supplied account id for the CSP associated with the remote profile. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.stackType">StackType</a></code> | <code>*string</code> | IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource, see google.aip.dev/122 for resource naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#name NetworkConnectivityTransport#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

Resource URL of the Network that will be peered with this Transport.

This field must be provided during resource creation and cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#network NetworkConnectivityTransport#network}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of this resource.

This is required to construct the resource name, but is not sent to the API since the region is already contained in the parent field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#region NetworkConnectivityTransport#region}

---

##### `RemoteProfile`<sup>Required</sup> <a name="RemoteProfile" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteProfile"></a>

```go
RemoteProfile *string
```

- *Type:* *string

Resource URL of the remoteTransportProfile that this Transport is connecting to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#remote_profile NetworkConnectivityTransport#remote_profile}

---

##### `AdvertisedRoutes`<sup>Optional</sup> <a name="AdvertisedRoutes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.advertisedRoutes"></a>

```go
AdvertisedRoutes *[]*string
```

- *Type:* *[]*string

List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#advertised_routes NetworkConnectivityTransport#advertised_routes}

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.bandwidth"></a>

```go
Bandwidth *string
```

- *Type:* *string

Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#bandwidth NetworkConnectivityTransport#bandwidth}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#deletion_policy NetworkConnectivityTransport#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#description NetworkConnectivityTransport#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#id NetworkConnectivityTransport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#labels NetworkConnectivityTransport#labels}

---

##### `MtuLimit`<sup>Optional</sup> <a name="MtuLimit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.mtuLimit"></a>

```go
MtuLimit *f64
```

- *Type:* *f64

[Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#mtu_limit NetworkConnectivityTransport#mtu_limit}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#project NetworkConnectivityTransport#project}.

---

##### `ProvidedActivationKey`<sup>Optional</sup> <a name="ProvidedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.providedActivationKey"></a>

```go
ProvidedActivationKey *string
```

- *Type:* *string

Key used for establishing a connection with the remote transport.

This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#provided_activation_key NetworkConnectivityTransport#provided_activation_key}

---

##### `RemoteAccountId`<sup>Optional</sup> <a name="RemoteAccountId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteAccountId"></a>

```go
RemoteAccountId *string
```

- *Type:* *string

The user supplied account id for the CSP associated with the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#remote_account_id NetworkConnectivityTransport#remote_account_id}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.stackType"></a>

```go
StackType *string
```

- *Type:* *string

IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#stack_type NetworkConnectivityTransport#stack_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.timeouts"></a>

```go
Timeouts NetworkConnectivityTransportTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#timeouts NetworkConnectivityTransport#timeouts}

---

### NetworkConnectivityTransportTimeouts <a name="NetworkConnectivityTransportTimeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitytransport"

&networkconnectivitytransport.NetworkConnectivityTransportTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#create NetworkConnectivityTransport#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#delete NetworkConnectivityTransport#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#update NetworkConnectivityTransport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#create NetworkConnectivityTransport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#delete NetworkConnectivityTransport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#update NetworkConnectivityTransport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityTransportTimeoutsOutputReference <a name="NetworkConnectivityTransportTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitytransport"

networkconnectivitytransport.NewNetworkConnectivityTransportTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivityTransportTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



