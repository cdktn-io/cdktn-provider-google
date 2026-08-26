# `computeVpnTunnel` Submodule <a name="`computeVpnTunnel` Submodule" id="@cdktn/provider-google.computeVpnTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeVpnTunnel <a name="ComputeVpnTunnel" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel google_compute_vpn_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

computevpntunnel.NewComputeVpnTunnel(scope Construct, id *string, config ComputeVpnTunnelConfig) ComputeVpnTunnel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig">ComputeVpnTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig">ComputeVpnTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putCipherSuite">PutCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetCipherSuite">ResetCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion">ResetIkeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector">ResetLocalTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway">ResetPeerExternalGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface">ResetPeerExternalGatewayInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway">ResetPeerGcpGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp">ResetPeerIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector">ResetRemoteTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter">ResetRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecret">ResetSharedSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecretWo">ResetSharedSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecretWoVersion">ResetSharedSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway">ResetTargetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway">ResetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface">ResetVpnGatewayInterface</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCipherSuite` <a name="PutCipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putCipherSuite"></a>

```go
func PutCipherSuite(value ComputeVpnTunnelCipherSuite)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putCipherSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

---

##### `PutParams` <a name="PutParams" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putParams"></a>

```go
func PutParams(value ComputeVpnTunnelParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts"></a>

```go
func PutTimeouts(value ComputeVpnTunnelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---

##### `ResetCipherSuite` <a name="ResetCipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetCipherSuite"></a>

```go
func ResetCipherSuite()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId"></a>

```go
func ResetId()
```

##### `ResetIkeVersion` <a name="ResetIkeVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion"></a>

```go
func ResetIkeVersion()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocalTrafficSelector` <a name="ResetLocalTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector"></a>

```go
func ResetLocalTrafficSelector()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetParams"></a>

```go
func ResetParams()
```

##### `ResetPeerExternalGateway` <a name="ResetPeerExternalGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway"></a>

```go
func ResetPeerExternalGateway()
```

##### `ResetPeerExternalGatewayInterface` <a name="ResetPeerExternalGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface"></a>

```go
func ResetPeerExternalGatewayInterface()
```

##### `ResetPeerGcpGateway` <a name="ResetPeerGcpGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway"></a>

```go
func ResetPeerGcpGateway()
```

##### `ResetPeerIp` <a name="ResetPeerIp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp"></a>

```go
func ResetPeerIp()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRemoteTrafficSelector` <a name="ResetRemoteTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector"></a>

```go
func ResetRemoteTrafficSelector()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter"></a>

```go
func ResetRouter()
```

##### `ResetSharedSecret` <a name="ResetSharedSecret" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecret"></a>

```go
func ResetSharedSecret()
```

##### `ResetSharedSecretWo` <a name="ResetSharedSecretWo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecretWo"></a>

```go
func ResetSharedSecretWo()
```

##### `ResetSharedSecretWoVersion` <a name="ResetSharedSecretWoVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecretWoVersion"></a>

```go
func ResetSharedSecretWoVersion()
```

##### `ResetTargetVpnGateway` <a name="ResetTargetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway"></a>

```go
func ResetTargetVpnGateway()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpnGateway` <a name="ResetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway"></a>

```go
func ResetVpnGateway()
```

##### `ResetVpnGatewayInterface` <a name="ResetVpnGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface"></a>

```go
func ResetVpnGatewayInterface()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeVpnTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

computevpntunnel.ComputeVpnTunnel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

computevpntunnel.ComputeVpnTunnel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

computevpntunnel.ComputeVpnTunnel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

computevpntunnel.ComputeVpnTunnel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeVpnTunnel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeVpnTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeVpnTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeVpnTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cipherSuite">CipherSuite</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference">ComputeVpnTunnelCipherSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus">DetailedStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference">ComputeVpnTunnelParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash">SharedSecretHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cipherSuiteInput">CipherSuiteInput</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput">IkeVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput">LocalTrafficSelectorInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput">PeerExternalGatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput">PeerExternalGatewayInterfaceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput">PeerGcpGatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput">PeerIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput">RemoteTrafficSelectorInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput">SharedSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoInput">SharedSecretWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoVersionInput">SharedSecretWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput">TargetVpnGatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput">VpnGatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput">VpnGatewayInterfaceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion">IkeVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector">LocalTrafficSelector</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway">PeerExternalGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface">PeerExternalGatewayInterface</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway">PeerGcpGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp">PeerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector">RemoteTrafficSelector</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router">Router</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret">SharedSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWo">SharedSecretWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoVersion">SharedSecretWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway">TargetVpnGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway">VpnGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface">VpnGatewayInterface</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CipherSuite`<sup>Required</sup> <a name="CipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cipherSuite"></a>

```go
func CipherSuite() ComputeVpnTunnelCipherSuiteOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference">ComputeVpnTunnelCipherSuiteOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `DetailedStatus`<sup>Required</sup> <a name="DetailedStatus" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus"></a>

```go
func DetailedStatus() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.params"></a>

```go
func Params() ComputeVpnTunnelParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference">ComputeVpnTunnelParamsOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SharedSecretHash`<sup>Required</sup> <a name="SharedSecretHash" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash"></a>

```go
func SharedSecretHash() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts"></a>

```go
func Timeouts() ComputeVpnTunnelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a>

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

##### `CipherSuiteInput`<sup>Optional</sup> <a name="CipherSuiteInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cipherSuiteInput"></a>

```go
func CipherSuiteInput() ComputeVpnTunnelCipherSuite
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IkeVersionInput`<sup>Optional</sup> <a name="IkeVersionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput"></a>

```go
func IkeVersionInput() *f64
```

- *Type:* *f64

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocalTrafficSelectorInput`<sup>Optional</sup> <a name="LocalTrafficSelectorInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput"></a>

```go
func LocalTrafficSelectorInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.paramsInput"></a>

```go
func ParamsInput() ComputeVpnTunnelParams
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

---

##### `PeerExternalGatewayInput`<sup>Optional</sup> <a name="PeerExternalGatewayInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput"></a>

```go
func PeerExternalGatewayInput() *string
```

- *Type:* *string

---

##### `PeerExternalGatewayInterfaceInput`<sup>Optional</sup> <a name="PeerExternalGatewayInterfaceInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput"></a>

```go
func PeerExternalGatewayInterfaceInput() *f64
```

- *Type:* *f64

---

##### `PeerGcpGatewayInput`<sup>Optional</sup> <a name="PeerGcpGatewayInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput"></a>

```go
func PeerGcpGatewayInput() *string
```

- *Type:* *string

---

##### `PeerIpInput`<sup>Optional</sup> <a name="PeerIpInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput"></a>

```go
func PeerIpInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RemoteTrafficSelectorInput`<sup>Optional</sup> <a name="RemoteTrafficSelectorInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput"></a>

```go
func RemoteTrafficSelectorInput() *[]*string
```

- *Type:* *[]*string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `SharedSecretInput`<sup>Optional</sup> <a name="SharedSecretInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput"></a>

```go
func SharedSecretInput() *string
```

- *Type:* *string

---

##### `SharedSecretWoInput`<sup>Optional</sup> <a name="SharedSecretWoInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoInput"></a>

```go
func SharedSecretWoInput() *string
```

- *Type:* *string

---

##### `SharedSecretWoVersionInput`<sup>Optional</sup> <a name="SharedSecretWoVersionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoVersionInput"></a>

```go
func SharedSecretWoVersionInput() *string
```

- *Type:* *string

---

##### `TargetVpnGatewayInput`<sup>Optional</sup> <a name="TargetVpnGatewayInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput"></a>

```go
func TargetVpnGatewayInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpnGatewayInput`<sup>Optional</sup> <a name="VpnGatewayInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput"></a>

```go
func VpnGatewayInput() *string
```

- *Type:* *string

---

##### `VpnGatewayInterfaceInput`<sup>Optional</sup> <a name="VpnGatewayInterfaceInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput"></a>

```go
func VpnGatewayInterfaceInput() *f64
```

- *Type:* *f64

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IkeVersion`<sup>Required</sup> <a name="IkeVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion"></a>

```go
func IkeVersion() *f64
```

- *Type:* *f64

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocalTrafficSelector`<sup>Required</sup> <a name="LocalTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector"></a>

```go
func LocalTrafficSelector() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PeerExternalGateway`<sup>Required</sup> <a name="PeerExternalGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway"></a>

```go
func PeerExternalGateway() *string
```

- *Type:* *string

---

##### `PeerExternalGatewayInterface`<sup>Required</sup> <a name="PeerExternalGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface"></a>

```go
func PeerExternalGatewayInterface() *f64
```

- *Type:* *f64

---

##### `PeerGcpGateway`<sup>Required</sup> <a name="PeerGcpGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway"></a>

```go
func PeerGcpGateway() *string
```

- *Type:* *string

---

##### `PeerIp`<sup>Required</sup> <a name="PeerIp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp"></a>

```go
func PeerIp() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RemoteTrafficSelector`<sup>Required</sup> <a name="RemoteTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector"></a>

```go
func RemoteTrafficSelector() *[]*string
```

- *Type:* *[]*string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret"></a>

```go
func SharedSecret() *string
```

- *Type:* *string

---

##### ~~`SharedSecretWo`~~<sup>Required</sup> <a name="SharedSecretWo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func SharedSecretWo() *string
```

- *Type:* *string

---

##### `SharedSecretWoVersion`<sup>Required</sup> <a name="SharedSecretWoVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoVersion"></a>

```go
func SharedSecretWoVersion() *string
```

- *Type:* *string

---

##### `TargetVpnGateway`<sup>Required</sup> <a name="TargetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway"></a>

```go
func TargetVpnGateway() *string
```

- *Type:* *string

---

##### `VpnGateway`<sup>Required</sup> <a name="VpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway"></a>

```go
func VpnGateway() *string
```

- *Type:* *string

---

##### `VpnGatewayInterface`<sup>Required</sup> <a name="VpnGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface"></a>

```go
func VpnGatewayInterface() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeVpnTunnelCipherSuite <a name="ComputeVpnTunnelCipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

&computevpntunnel.ComputeVpnTunnelCipherSuite {
	Phase1: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1,
	Phase2: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.property.phase1">Phase1</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a></code> | phase1 block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.property.phase2">Phase2</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a></code> | phase2 block. |

---

##### `Phase1`<sup>Optional</sup> <a name="Phase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.property.phase1"></a>

```go
Phase1 ComputeVpnTunnelCipherSuitePhase1
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a>

phase1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#phase1 ComputeVpnTunnel#phase1}

---

##### `Phase2`<sup>Optional</sup> <a name="Phase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.property.phase2"></a>

```go
Phase2 ComputeVpnTunnelCipherSuitePhase2
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a>

phase2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#phase2 ComputeVpnTunnel#phase2}

---

### ComputeVpnTunnelCipherSuitePhase1 <a name="ComputeVpnTunnelCipherSuitePhase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

&computevpntunnel.ComputeVpnTunnelCipherSuitePhase1 {
	Dh: *[]*string,
	Encryption: *[]*string,
	Integrity: *[]*string,
	Prf: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.dh">Dh</a></code> | <code>*[]*string</code> | Diffie-Hellman groups. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.encryption">Encryption</a></code> | <code>*[]*string</code> | Encryption algorithms. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.integrity">Integrity</a></code> | <code>*[]*string</code> | Integrity algorithms. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.prf">Prf</a></code> | <code>*[]*string</code> | Pseudo-random functions. |

---

##### `Dh`<sup>Optional</sup> <a name="Dh" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.dh"></a>

```go
Dh *[]*string
```

- *Type:* *[]*string

Diffie-Hellman groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#dh ComputeVpnTunnel#dh}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.encryption"></a>

```go
Encryption *[]*string
```

- *Type:* *[]*string

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#encryption ComputeVpnTunnel#encryption}

---

##### `Integrity`<sup>Optional</sup> <a name="Integrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.integrity"></a>

```go
Integrity *[]*string
```

- *Type:* *[]*string

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#integrity ComputeVpnTunnel#integrity}

---

##### `Prf`<sup>Optional</sup> <a name="Prf" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.prf"></a>

```go
Prf *[]*string
```

- *Type:* *[]*string

Pseudo-random functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#prf ComputeVpnTunnel#prf}

---

### ComputeVpnTunnelCipherSuitePhase2 <a name="ComputeVpnTunnelCipherSuitePhase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

&computevpntunnel.ComputeVpnTunnelCipherSuitePhase2 {
	Encryption: *[]*string,
	Integrity: *[]*string,
	Pfs: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.encryption">Encryption</a></code> | <code>*[]*string</code> | Encryption algorithms. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.integrity">Integrity</a></code> | <code>*[]*string</code> | Integrity algorithms. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.pfs">Pfs</a></code> | <code>*[]*string</code> | Perfect forward secrecy groups. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.encryption"></a>

```go
Encryption *[]*string
```

- *Type:* *[]*string

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#encryption ComputeVpnTunnel#encryption}

---

##### `Integrity`<sup>Optional</sup> <a name="Integrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.integrity"></a>

```go
Integrity *[]*string
```

- *Type:* *[]*string

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#integrity ComputeVpnTunnel#integrity}

---

##### `Pfs`<sup>Optional</sup> <a name="Pfs" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.pfs"></a>

```go
Pfs *[]*string
```

- *Type:* *[]*string

Perfect forward secrecy groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#pfs ComputeVpnTunnel#pfs}

---

### ComputeVpnTunnelConfig <a name="ComputeVpnTunnelConfig" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

&computevpntunnel.ComputeVpnTunnelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CipherSuite: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeVpnTunnel.ComputeVpnTunnelCipherSuite,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	IkeVersion: *f64,
	Labels: *map[string]*string,
	LocalTrafficSelector: *[]*string,
	Params: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeVpnTunnel.ComputeVpnTunnelParams,
	PeerExternalGateway: *string,
	PeerExternalGatewayInterface: *f64,
	PeerGcpGateway: *string,
	PeerIp: *string,
	Project: *string,
	Region: *string,
	RemoteTrafficSelector: *[]*string,
	Router: *string,
	SharedSecret: *string,
	SharedSecretWo: *string,
	SharedSecretWoVersion: *string,
	TargetVpnGateway: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeVpnTunnel.ComputeVpnTunnelTimeouts,
	VpnGateway: *string,
	VpnGatewayInterface: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.cipherSuite">CipherSuite</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a></code> | cipher_suite block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion">IkeVersion</a></code> | <code>*f64</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector">LocalTrafficSelector</a></code> | <code>*[]*string</code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway">PeerExternalGateway</a></code> | <code>*string</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface">PeerExternalGatewayInterface</a></code> | <code>*f64</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway">PeerGcpGateway</a></code> | <code>*string</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp">PeerIp</a></code> | <code>*string</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region">Region</a></code> | <code>*string</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector">RemoteTrafficSelector</a></code> | <code>*[]*string</code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router">Router</a></code> | <code>*string</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret">SharedSecret</a></code> | <code>*string</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecretWo">SharedSecretWo</a></code> | <code>*string</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecretWoVersion">SharedSecretWoVersion</a></code> | <code>*string</code> | Triggers update of 'shared_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway">TargetVpnGateway</a></code> | <code>*string</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway">VpnGateway</a></code> | <code>*string</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface">VpnGatewayInterface</a></code> | <code>*f64</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#name ComputeVpnTunnel#name}

---

##### `CipherSuite`<sup>Optional</sup> <a name="CipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.cipherSuite"></a>

```go
CipherSuite ComputeVpnTunnelCipherSuite
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

cipher_suite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#cipher_suite ComputeVpnTunnel#cipher_suite}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#deletion_policy ComputeVpnTunnel#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#description ComputeVpnTunnel#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IkeVersion`<sup>Optional</sup> <a name="IkeVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion"></a>

```go
IkeVersion *f64
```

- *Type:* *f64

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#ike_version ComputeVpnTunnel#ike_version}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#labels ComputeVpnTunnel#labels}

---

##### `LocalTrafficSelector`<sup>Optional</sup> <a name="LocalTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector"></a>

```go
LocalTrafficSelector *[]*string
```

- *Type:* *[]*string

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#local_traffic_selector ComputeVpnTunnel#local_traffic_selector}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.params"></a>

```go
Params ComputeVpnTunnelParams
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#params ComputeVpnTunnel#params}

---

##### `PeerExternalGateway`<sup>Optional</sup> <a name="PeerExternalGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway"></a>

```go
PeerExternalGateway *string
```

- *Type:* *string

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#peer_external_gateway ComputeVpnTunnel#peer_external_gateway}

---

##### `PeerExternalGatewayInterface`<sup>Optional</sup> <a name="PeerExternalGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface"></a>

```go
PeerExternalGatewayInterface *f64
```

- *Type:* *f64

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#peer_external_gateway_interface ComputeVpnTunnel#peer_external_gateway_interface}

---

##### `PeerGcpGateway`<sup>Optional</sup> <a name="PeerGcpGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway"></a>

```go
PeerGcpGateway *string
```

- *Type:* *string

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#peer_gcp_gateway ComputeVpnTunnel#peer_gcp_gateway}

---

##### `PeerIp`<sup>Optional</sup> <a name="PeerIp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp"></a>

```go
PeerIp *string
```

- *Type:* *string

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#peer_ip ComputeVpnTunnel#peer_ip}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#region ComputeVpnTunnel#region}

---

##### `RemoteTrafficSelector`<sup>Optional</sup> <a name="RemoteTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector"></a>

```go
RemoteTrafficSelector *[]*string
```

- *Type:* *[]*string

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#remote_traffic_selector ComputeVpnTunnel#remote_traffic_selector}

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#router ComputeVpnTunnel#router}

---

##### `SharedSecret`<sup>Optional</sup> <a name="SharedSecret" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret"></a>

```go
SharedSecret *string
```

- *Type:* *string

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#shared_secret ComputeVpnTunnel#shared_secret}

---

##### `SharedSecretWo`<sup>Optional</sup> <a name="SharedSecretWo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecretWo"></a>

```go
SharedSecretWo *string
```

- *Type:* *string

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#shared_secret_wo ComputeVpnTunnel#shared_secret_wo}

---

##### `SharedSecretWoVersion`<sup>Optional</sup> <a name="SharedSecretWoVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecretWoVersion"></a>

```go
SharedSecretWoVersion *string
```

- *Type:* *string

Triggers update of 'shared_secret_wo' write-only.

Increment this value when an update to 'shared_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#shared_secret_wo_version ComputeVpnTunnel#shared_secret_wo_version}

---

##### `TargetVpnGateway`<sup>Optional</sup> <a name="TargetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway"></a>

```go
TargetVpnGateway *string
```

- *Type:* *string

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#target_vpn_gateway ComputeVpnTunnel#target_vpn_gateway}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts"></a>

```go
Timeouts ComputeVpnTunnelTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#timeouts ComputeVpnTunnel#timeouts}

---

##### `VpnGateway`<sup>Optional</sup> <a name="VpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway"></a>

```go
VpnGateway *string
```

- *Type:* *string

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#vpn_gateway ComputeVpnTunnel#vpn_gateway}

---

##### `VpnGatewayInterface`<sup>Optional</sup> <a name="VpnGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface"></a>

```go
VpnGatewayInterface *f64
```

- *Type:* *f64

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#vpn_gateway_interface ComputeVpnTunnel#vpn_gateway_interface}

---

### ComputeVpnTunnelParams <a name="ComputeVpnTunnelParams" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

&computevpntunnel.ComputeVpnTunnelParams {
	ResourceManagerTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | Resource manager tags to be bound to the Vpn Tunnel. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

Resource manager tags to be bound to the Vpn Tunnel.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#resource_manager_tags ComputeVpnTunnel#resource_manager_tags}

---

### ComputeVpnTunnelTimeouts <a name="ComputeVpnTunnelTimeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

&computevpntunnel.ComputeVpnTunnelTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#update ComputeVpnTunnel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#update ComputeVpnTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeVpnTunnelCipherSuiteOutputReference <a name="ComputeVpnTunnelCipherSuiteOutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

computevpntunnel.NewComputeVpnTunnelCipherSuiteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeVpnTunnelCipherSuiteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase1">PutPhase1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase2">PutPhase2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resetPhase1">ResetPhase1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resetPhase2">ResetPhase2</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPhase1` <a name="PutPhase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase1"></a>

```go
func PutPhase1(value ComputeVpnTunnelCipherSuitePhase1)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a>

---

##### `PutPhase2` <a name="PutPhase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase2"></a>

```go
func PutPhase2(value ComputeVpnTunnelCipherSuitePhase2)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a>

---

##### `ResetPhase1` <a name="ResetPhase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resetPhase1"></a>

```go
func ResetPhase1()
```

##### `ResetPhase2` <a name="ResetPhase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resetPhase2"></a>

```go
func ResetPhase2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase1">Phase1</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference">ComputeVpnTunnelCipherSuitePhase1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase2">Phase2</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference">ComputeVpnTunnelCipherSuitePhase2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase1Input">Phase1Input</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase2Input">Phase2Input</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Phase1`<sup>Required</sup> <a name="Phase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase1"></a>

```go
func Phase1() ComputeVpnTunnelCipherSuitePhase1OutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference">ComputeVpnTunnelCipherSuitePhase1OutputReference</a>

---

##### `Phase2`<sup>Required</sup> <a name="Phase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase2"></a>

```go
func Phase2() ComputeVpnTunnelCipherSuitePhase2OutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference">ComputeVpnTunnelCipherSuitePhase2OutputReference</a>

---

##### `Phase1Input`<sup>Optional</sup> <a name="Phase1Input" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase1Input"></a>

```go
func Phase1Input() ComputeVpnTunnelCipherSuitePhase1
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a>

---

##### `Phase2Input`<sup>Optional</sup> <a name="Phase2Input" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase2Input"></a>

```go
func Phase2Input() ComputeVpnTunnelCipherSuitePhase2
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeVpnTunnelCipherSuite
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

---


### ComputeVpnTunnelCipherSuitePhase1OutputReference <a name="ComputeVpnTunnelCipherSuitePhase1OutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

computevpntunnel.NewComputeVpnTunnelCipherSuitePhase1OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeVpnTunnelCipherSuitePhase1OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetDh">ResetDh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetIntegrity">ResetIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetPrf">ResetPrf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDh` <a name="ResetDh" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetDh"></a>

```go
func ResetDh()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetIntegrity` <a name="ResetIntegrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetIntegrity"></a>

```go
func ResetIntegrity()
```

##### `ResetPrf` <a name="ResetPrf" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetPrf"></a>

```go
func ResetPrf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.dhInput">DhInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrityInput">IntegrityInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.prfInput">PrfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.dh">Dh</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryption">Encryption</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrity">Integrity</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.prf">Prf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DhInput`<sup>Optional</sup> <a name="DhInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.dhInput"></a>

```go
func DhInput() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryptionInput"></a>

```go
func EncryptionInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntegrityInput`<sup>Optional</sup> <a name="IntegrityInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrityInput"></a>

```go
func IntegrityInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrfInput`<sup>Optional</sup> <a name="PrfInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.prfInput"></a>

```go
func PrfInput() *[]*string
```

- *Type:* *[]*string

---

##### `Dh`<sup>Required</sup> <a name="Dh" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.dh"></a>

```go
func Dh() *[]*string
```

- *Type:* *[]*string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryption"></a>

```go
func Encryption() *[]*string
```

- *Type:* *[]*string

---

##### `Integrity`<sup>Required</sup> <a name="Integrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrity"></a>

```go
func Integrity() *[]*string
```

- *Type:* *[]*string

---

##### `Prf`<sup>Required</sup> <a name="Prf" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.prf"></a>

```go
func Prf() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeVpnTunnelCipherSuitePhase1
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a>

---


### ComputeVpnTunnelCipherSuitePhase2OutputReference <a name="ComputeVpnTunnelCipherSuitePhase2OutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

computevpntunnel.NewComputeVpnTunnelCipherSuitePhase2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeVpnTunnelCipherSuitePhase2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetIntegrity">ResetIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetPfs">ResetPfs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetIntegrity` <a name="ResetIntegrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetIntegrity"></a>

```go
func ResetIntegrity()
```

##### `ResetPfs` <a name="ResetPfs" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetPfs"></a>

```go
func ResetPfs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrityInput">IntegrityInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfsInput">PfsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryption">Encryption</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrity">Integrity</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfs">Pfs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryptionInput"></a>

```go
func EncryptionInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntegrityInput`<sup>Optional</sup> <a name="IntegrityInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrityInput"></a>

```go
func IntegrityInput() *[]*string
```

- *Type:* *[]*string

---

##### `PfsInput`<sup>Optional</sup> <a name="PfsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfsInput"></a>

```go
func PfsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryption"></a>

```go
func Encryption() *[]*string
```

- *Type:* *[]*string

---

##### `Integrity`<sup>Required</sup> <a name="Integrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrity"></a>

```go
func Integrity() *[]*string
```

- *Type:* *[]*string

---

##### `Pfs`<sup>Required</sup> <a name="Pfs" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfs"></a>

```go
func Pfs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeVpnTunnelCipherSuitePhase2
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a>

---


### ComputeVpnTunnelParamsOutputReference <a name="ComputeVpnTunnelParamsOutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

computevpntunnel.NewComputeVpnTunnelParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeVpnTunnelParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeVpnTunnelParams
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

---


### ComputeVpnTunnelTimeoutsOutputReference <a name="ComputeVpnTunnelTimeoutsOutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computevpntunnel"

computevpntunnel.NewComputeVpnTunnelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeVpnTunnelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



