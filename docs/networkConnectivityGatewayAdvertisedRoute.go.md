# `networkConnectivityGatewayAdvertisedRoute` Submodule <a name="`networkConnectivityGatewayAdvertisedRoute` Submodule" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityGatewayAdvertisedRoute <a name="NetworkConnectivityGatewayAdvertisedRoute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route google_network_connectivity_gateway_advertised_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitygatewayadvertisedroute"

networkconnectivitygatewayadvertisedroute.NewNetworkConnectivityGatewayAdvertisedRoute(scope Construct, id *string, config NetworkConnectivityGatewayAdvertisedRouteConfig) NetworkConnectivityGatewayAdvertisedRoute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig">NetworkConnectivityGatewayAdvertisedRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig">NetworkConnectivityGatewayAdvertisedRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetIpRange">ResetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetRecipient">ResetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.putTimeouts"></a>

```go
func PutTimeouts(value NetworkConnectivityGatewayAdvertisedRouteTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetId"></a>

```go
func ResetId()
```

##### `ResetIpRange` <a name="ResetIpRange" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetIpRange"></a>

```go
func ResetIpRange()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRecipient` <a name="ResetRecipient" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetRecipient"></a>

```go
func ResetRecipient()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkConnectivityGatewayAdvertisedRoute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitygatewayadvertisedroute"

networkconnectivitygatewayadvertisedroute.NetworkConnectivityGatewayAdvertisedRoute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitygatewayadvertisedroute"

networkconnectivitygatewayadvertisedroute.NetworkConnectivityGatewayAdvertisedRoute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitygatewayadvertisedroute"

networkconnectivitygatewayadvertisedroute.NetworkConnectivityGatewayAdvertisedRoute_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitygatewayadvertisedroute"

networkconnectivitygatewayadvertisedroute.NetworkConnectivityGatewayAdvertisedRoute_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkConnectivityGatewayAdvertisedRoute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkConnectivityGatewayAdvertisedRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkConnectivityGatewayAdvertisedRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityGatewayAdvertisedRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference">NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.ipRangeInput">IpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.recipientInput">RecipientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.spokeInput">SpokeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.ipRange">IpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.recipient">Recipient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.spoke">Spoke</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.timeouts"></a>

```go
func Timeouts() NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference">NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.ipRangeInput"></a>

```go
func IpRangeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RecipientInput`<sup>Optional</sup> <a name="RecipientInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.recipientInput"></a>

```go
func RecipientInput() *string
```

- *Type:* *string

---

##### `SpokeInput`<sup>Optional</sup> <a name="SpokeInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.spokeInput"></a>

```go
func SpokeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.ipRange"></a>

```go
func IpRange() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Recipient`<sup>Required</sup> <a name="Recipient" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.recipient"></a>

```go
func Recipient() *string
```

- *Type:* *string

---

##### `Spoke`<sup>Required</sup> <a name="Spoke" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.spoke"></a>

```go
func Spoke() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityGatewayAdvertisedRouteConfig <a name="NetworkConnectivityGatewayAdvertisedRouteConfig" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitygatewayadvertisedroute"

&networkconnectivitygatewayadvertisedroute.NetworkConnectivityGatewayAdvertisedRouteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Spoke: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	IpRange: *string,
	Labels: *map[string]*string,
	Priority: *f64,
	Project: *string,
	Recipient: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.name">Name</a></code> | <code>*string</code> | The name of the gateway advertised route. Route names must be unique. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.spoke">Spoke</a></code> | <code>*string</code> | The name of the spoke. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of the gateway advertised route. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#id NetworkConnectivityGatewayAdvertisedRoute#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.ipRange">IpRange</a></code> | <code>*string</code> | This route's advertised IP address range. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.priority">Priority</a></code> | <code>*f64</code> | The priority of this advertised route. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#project NetworkConnectivityGatewayAdvertisedRoute#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.recipient">Recipient</a></code> | <code>*string</code> | the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"]. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#location NetworkConnectivityGatewayAdvertisedRoute#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the gateway advertised route. Route names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#name NetworkConnectivityGatewayAdvertisedRoute#name}

---

##### `Spoke`<sup>Required</sup> <a name="Spoke" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.spoke"></a>

```go
Spoke *string
```

- *Type:* *string

The name of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#spoke NetworkConnectivityGatewayAdvertisedRoute#spoke}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#deletion_policy NetworkConnectivityGatewayAdvertisedRoute#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of the gateway advertised route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#description NetworkConnectivityGatewayAdvertisedRoute#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#id NetworkConnectivityGatewayAdvertisedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpRange`<sup>Optional</sup> <a name="IpRange" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.ipRange"></a>

```go
IpRange *string
```

- *Type:* *string

This route's advertised IP address range.

Must be a valid CIDR-formatted prefix.
If an IP address is provided without a subnet mask, it is interpreted as, for IPv4, a /32 singular IP address range, and, for IPv6, /128

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#ip_range NetworkConnectivityGatewayAdvertisedRoute#ip_range}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#labels NetworkConnectivityGatewayAdvertisedRoute#labels}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The priority of this advertised route.

You can choose a value from 0 to 65335.
If you don't provide a value, Google Cloud assigns a priority of 100 to the ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#priority NetworkConnectivityGatewayAdvertisedRoute#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#project NetworkConnectivityGatewayAdvertisedRoute#project}.

---

##### `Recipient`<sup>Optional</sup> <a name="Recipient" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.recipient"></a>

```go
Recipient *string
```

- *Type:* *string

the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#recipient NetworkConnectivityGatewayAdvertisedRoute#recipient}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.timeouts"></a>

```go
Timeouts NetworkConnectivityGatewayAdvertisedRouteTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#timeouts NetworkConnectivityGatewayAdvertisedRoute#timeouts}

---

### NetworkConnectivityGatewayAdvertisedRouteTimeouts <a name="NetworkConnectivityGatewayAdvertisedRouteTimeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitygatewayadvertisedroute"

&networkconnectivitygatewayadvertisedroute.NetworkConnectivityGatewayAdvertisedRouteTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#create NetworkConnectivityGatewayAdvertisedRoute#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#delete NetworkConnectivityGatewayAdvertisedRoute#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#update NetworkConnectivityGatewayAdvertisedRoute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#create NetworkConnectivityGatewayAdvertisedRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#delete NetworkConnectivityGatewayAdvertisedRoute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#update NetworkConnectivityGatewayAdvertisedRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference <a name="NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkconnectivitygatewayadvertisedroute"

networkconnectivitygatewayadvertisedroute.NewNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



