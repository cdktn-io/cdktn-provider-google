# `computeVpnTunnel` Submodule <a name="`computeVpnTunnel` Submodule" id="@cdktn/provider-google.computeVpnTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeVpnTunnel <a name="ComputeVpnTunnel" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel google_compute_vpn_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeVpnTunnel(Construct Scope, string Id, ComputeVpnTunnelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig">ComputeVpnTunnelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCipherSuite` <a name="PutCipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putCipherSuite"></a>

```csharp
private void PutCipherSuite(ComputeVpnTunnelCipherSuite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putCipherSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

---

##### `PutParams` <a name="PutParams" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putParams"></a>

```csharp
private void PutParams(ComputeVpnTunnelParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeVpnTunnelTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---

##### `ResetCipherSuite` <a name="ResetCipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetCipherSuite"></a>

```csharp
private void ResetCipherSuite()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIkeVersion` <a name="ResetIkeVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion"></a>

```csharp
private void ResetIkeVersion()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocalTrafficSelector` <a name="ResetLocalTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector"></a>

```csharp
private void ResetLocalTrafficSelector()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetPeerExternalGateway` <a name="ResetPeerExternalGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway"></a>

```csharp
private void ResetPeerExternalGateway()
```

##### `ResetPeerExternalGatewayInterface` <a name="ResetPeerExternalGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface"></a>

```csharp
private void ResetPeerExternalGatewayInterface()
```

##### `ResetPeerGcpGateway` <a name="ResetPeerGcpGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway"></a>

```csharp
private void ResetPeerGcpGateway()
```

##### `ResetPeerIp` <a name="ResetPeerIp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp"></a>

```csharp
private void ResetPeerIp()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRemoteTrafficSelector` <a name="ResetRemoteTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector"></a>

```csharp
private void ResetRemoteTrafficSelector()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter"></a>

```csharp
private void ResetRouter()
```

##### `ResetSharedSecret` <a name="ResetSharedSecret" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecret"></a>

```csharp
private void ResetSharedSecret()
```

##### `ResetSharedSecretWo` <a name="ResetSharedSecretWo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecretWo"></a>

```csharp
private void ResetSharedSecretWo()
```

##### `ResetSharedSecretWoVersion` <a name="ResetSharedSecretWoVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecretWoVersion"></a>

```csharp
private void ResetSharedSecretWoVersion()
```

##### `ResetTargetVpnGateway` <a name="ResetTargetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway"></a>

```csharp
private void ResetTargetVpnGateway()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpnGateway` <a name="ResetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway"></a>

```csharp
private void ResetVpnGateway()
```

##### `ResetVpnGatewayInterface` <a name="ResetVpnGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface"></a>

```csharp
private void ResetVpnGatewayInterface()
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

```csharp
using Io.Cdktn.Providers.Google;

ComputeVpnTunnel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeVpnTunnel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeVpnTunnel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeVpnTunnel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputeVpnTunnel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeVpnTunnel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeVpnTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputeVpnTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cipherSuite">CipherSuite</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference">ComputeVpnTunnelCipherSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus">DetailedStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference">ComputeVpnTunnelParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash">SharedSecretHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cipherSuiteInput">CipherSuiteInput</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput">IkeVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput">LocalTrafficSelectorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput">PeerExternalGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput">PeerExternalGatewayInterfaceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput">PeerGcpGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput">PeerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput">RemoteTrafficSelectorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput">RouterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput">SharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoInput">SharedSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoVersionInput">SharedSecretWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput">TargetVpnGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput">VpnGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput">VpnGatewayInterfaceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion">IkeVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector">LocalTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway">PeerExternalGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface">PeerExternalGatewayInterface</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway">PeerGcpGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp">PeerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector">RemoteTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router">Router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret">SharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWo">SharedSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoVersion">SharedSecretWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway">TargetVpnGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway">VpnGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface">VpnGatewayInterface</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CipherSuite`<sup>Required</sup> <a name="CipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cipherSuite"></a>

```csharp
public ComputeVpnTunnelCipherSuiteOutputReference CipherSuite { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference">ComputeVpnTunnelCipherSuiteOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `DetailedStatus`<sup>Required</sup> <a name="DetailedStatus" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus"></a>

```csharp
public string DetailedStatus { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.params"></a>

```csharp
public ComputeVpnTunnelParamsOutputReference Params { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference">ComputeVpnTunnelParamsOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SharedSecretHash`<sup>Required</sup> <a name="SharedSecretHash" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash"></a>

```csharp
public string SharedSecretHash { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts"></a>

```csharp
public ComputeVpnTunnelTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a>

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

##### `CipherSuiteInput`<sup>Optional</sup> <a name="CipherSuiteInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cipherSuiteInput"></a>

```csharp
public ComputeVpnTunnelCipherSuite CipherSuiteInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IkeVersionInput`<sup>Optional</sup> <a name="IkeVersionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput"></a>

```csharp
public double IkeVersionInput { get; }
```

- *Type:* double

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocalTrafficSelectorInput`<sup>Optional</sup> <a name="LocalTrafficSelectorInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput"></a>

```csharp
public string[] LocalTrafficSelectorInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.paramsInput"></a>

```csharp
public ComputeVpnTunnelParams ParamsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

---

##### `PeerExternalGatewayInput`<sup>Optional</sup> <a name="PeerExternalGatewayInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput"></a>

```csharp
public string PeerExternalGatewayInput { get; }
```

- *Type:* string

---

##### `PeerExternalGatewayInterfaceInput`<sup>Optional</sup> <a name="PeerExternalGatewayInterfaceInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput"></a>

```csharp
public double PeerExternalGatewayInterfaceInput { get; }
```

- *Type:* double

---

##### `PeerGcpGatewayInput`<sup>Optional</sup> <a name="PeerGcpGatewayInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput"></a>

```csharp
public string PeerGcpGatewayInput { get; }
```

- *Type:* string

---

##### `PeerIpInput`<sup>Optional</sup> <a name="PeerIpInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput"></a>

```csharp
public string PeerIpInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RemoteTrafficSelectorInput`<sup>Optional</sup> <a name="RemoteTrafficSelectorInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput"></a>

```csharp
public string[] RemoteTrafficSelectorInput { get; }
```

- *Type:* string[]

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput"></a>

```csharp
public string RouterInput { get; }
```

- *Type:* string

---

##### `SharedSecretInput`<sup>Optional</sup> <a name="SharedSecretInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput"></a>

```csharp
public string SharedSecretInput { get; }
```

- *Type:* string

---

##### `SharedSecretWoInput`<sup>Optional</sup> <a name="SharedSecretWoInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoInput"></a>

```csharp
public string SharedSecretWoInput { get; }
```

- *Type:* string

---

##### `SharedSecretWoVersionInput`<sup>Optional</sup> <a name="SharedSecretWoVersionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoVersionInput"></a>

```csharp
public string SharedSecretWoVersionInput { get; }
```

- *Type:* string

---

##### `TargetVpnGatewayInput`<sup>Optional</sup> <a name="TargetVpnGatewayInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput"></a>

```csharp
public string TargetVpnGatewayInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput"></a>

```csharp
public IResolvable|ComputeVpnTunnelTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---

##### `VpnGatewayInput`<sup>Optional</sup> <a name="VpnGatewayInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput"></a>

```csharp
public string VpnGatewayInput { get; }
```

- *Type:* string

---

##### `VpnGatewayInterfaceInput`<sup>Optional</sup> <a name="VpnGatewayInterfaceInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput"></a>

```csharp
public double VpnGatewayInterfaceInput { get; }
```

- *Type:* double

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IkeVersion`<sup>Required</sup> <a name="IkeVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion"></a>

```csharp
public double IkeVersion { get; }
```

- *Type:* double

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocalTrafficSelector`<sup>Required</sup> <a name="LocalTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector"></a>

```csharp
public string[] LocalTrafficSelector { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PeerExternalGateway`<sup>Required</sup> <a name="PeerExternalGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway"></a>

```csharp
public string PeerExternalGateway { get; }
```

- *Type:* string

---

##### `PeerExternalGatewayInterface`<sup>Required</sup> <a name="PeerExternalGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface"></a>

```csharp
public double PeerExternalGatewayInterface { get; }
```

- *Type:* double

---

##### `PeerGcpGateway`<sup>Required</sup> <a name="PeerGcpGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway"></a>

```csharp
public string PeerGcpGateway { get; }
```

- *Type:* string

---

##### `PeerIp`<sup>Required</sup> <a name="PeerIp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp"></a>

```csharp
public string PeerIp { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RemoteTrafficSelector`<sup>Required</sup> <a name="RemoteTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector"></a>

```csharp
public string[] RemoteTrafficSelector { get; }
```

- *Type:* string[]

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router"></a>

```csharp
public string Router { get; }
```

- *Type:* string

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret"></a>

```csharp
public string SharedSecret { get; }
```

- *Type:* string

---

##### `SharedSecretWo`<sup>Required</sup> <a name="SharedSecretWo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWo"></a>

```csharp
public string SharedSecretWo { get; }
```

- *Type:* string

---

##### `SharedSecretWoVersion`<sup>Required</sup> <a name="SharedSecretWoVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoVersion"></a>

```csharp
public string SharedSecretWoVersion { get; }
```

- *Type:* string

---

##### `TargetVpnGateway`<sup>Required</sup> <a name="TargetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway"></a>

```csharp
public string TargetVpnGateway { get; }
```

- *Type:* string

---

##### `VpnGateway`<sup>Required</sup> <a name="VpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway"></a>

```csharp
public string VpnGateway { get; }
```

- *Type:* string

---

##### `VpnGatewayInterface`<sup>Required</sup> <a name="VpnGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface"></a>

```csharp
public double VpnGatewayInterface { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeVpnTunnelCipherSuite <a name="ComputeVpnTunnelCipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeVpnTunnelCipherSuite {
    ComputeVpnTunnelCipherSuitePhase1 Phase1 = null,
    ComputeVpnTunnelCipherSuitePhase2 Phase2 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.property.phase1">Phase1</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a></code> | phase1 block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.property.phase2">Phase2</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a></code> | phase2 block. |

---

##### `Phase1`<sup>Optional</sup> <a name="Phase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.property.phase1"></a>

```csharp
public ComputeVpnTunnelCipherSuitePhase1 Phase1 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a>

phase1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#phase1 ComputeVpnTunnel#phase1}

---

##### `Phase2`<sup>Optional</sup> <a name="Phase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.property.phase2"></a>

```csharp
public ComputeVpnTunnelCipherSuitePhase2 Phase2 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a>

phase2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#phase2 ComputeVpnTunnel#phase2}

---

### ComputeVpnTunnelCipherSuitePhase1 <a name="ComputeVpnTunnelCipherSuitePhase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeVpnTunnelCipherSuitePhase1 {
    string[] Dh = null,
    string[] Encryption = null,
    string[] Integrity = null,
    string[] Prf = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.dh">Dh</a></code> | <code>string[]</code> | Diffie-Hellman groups. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.encryption">Encryption</a></code> | <code>string[]</code> | Encryption algorithms. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.integrity">Integrity</a></code> | <code>string[]</code> | Integrity algorithms. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.prf">Prf</a></code> | <code>string[]</code> | Pseudo-random functions. |

---

##### `Dh`<sup>Optional</sup> <a name="Dh" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.dh"></a>

```csharp
public string[] Dh { get; set; }
```

- *Type:* string[]

Diffie-Hellman groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#dh ComputeVpnTunnel#dh}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.encryption"></a>

```csharp
public string[] Encryption { get; set; }
```

- *Type:* string[]

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#encryption ComputeVpnTunnel#encryption}

---

##### `Integrity`<sup>Optional</sup> <a name="Integrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.integrity"></a>

```csharp
public string[] Integrity { get; set; }
```

- *Type:* string[]

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#integrity ComputeVpnTunnel#integrity}

---

##### `Prf`<sup>Optional</sup> <a name="Prf" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.prf"></a>

```csharp
public string[] Prf { get; set; }
```

- *Type:* string[]

Pseudo-random functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#prf ComputeVpnTunnel#prf}

---

### ComputeVpnTunnelCipherSuitePhase2 <a name="ComputeVpnTunnelCipherSuitePhase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeVpnTunnelCipherSuitePhase2 {
    string[] Encryption = null,
    string[] Integrity = null,
    string[] Pfs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.encryption">Encryption</a></code> | <code>string[]</code> | Encryption algorithms. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.integrity">Integrity</a></code> | <code>string[]</code> | Integrity algorithms. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.pfs">Pfs</a></code> | <code>string[]</code> | Perfect forward secrecy groups. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.encryption"></a>

```csharp
public string[] Encryption { get; set; }
```

- *Type:* string[]

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#encryption ComputeVpnTunnel#encryption}

---

##### `Integrity`<sup>Optional</sup> <a name="Integrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.integrity"></a>

```csharp
public string[] Integrity { get; set; }
```

- *Type:* string[]

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#integrity ComputeVpnTunnel#integrity}

---

##### `Pfs`<sup>Optional</sup> <a name="Pfs" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.pfs"></a>

```csharp
public string[] Pfs { get; set; }
```

- *Type:* string[]

Perfect forward secrecy groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#pfs ComputeVpnTunnel#pfs}

---

### ComputeVpnTunnelConfig <a name="ComputeVpnTunnelConfig" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeVpnTunnelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    ComputeVpnTunnelCipherSuite CipherSuite = null,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    double IkeVersion = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string[] LocalTrafficSelector = null,
    ComputeVpnTunnelParams Params = null,
    string PeerExternalGateway = null,
    double PeerExternalGatewayInterface = null,
    string PeerGcpGateway = null,
    string PeerIp = null,
    string Project = null,
    string Region = null,
    string[] RemoteTrafficSelector = null,
    string Router = null,
    string SharedSecret = null,
    string SharedSecretWo = null,
    string SharedSecretWoVersion = null,
    string TargetVpnGateway = null,
    ComputeVpnTunnelTimeouts Timeouts = null,
    string VpnGateway = null,
    double VpnGatewayInterface = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.cipherSuite">CipherSuite</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a></code> | cipher_suite block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion">IkeVersion</a></code> | <code>double</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector">LocalTrafficSelector</a></code> | <code>string[]</code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway">PeerExternalGateway</a></code> | <code>string</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface">PeerExternalGatewayInterface</a></code> | <code>double</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway">PeerGcpGateway</a></code> | <code>string</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp">PeerIp</a></code> | <code>string</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region">Region</a></code> | <code>string</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector">RemoteTrafficSelector</a></code> | <code>string[]</code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router">Router</a></code> | <code>string</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret">SharedSecret</a></code> | <code>string</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecretWo">SharedSecretWo</a></code> | <code>string</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecretWoVersion">SharedSecretWoVersion</a></code> | <code>string</code> | Triggers update of 'shared_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway">TargetVpnGateway</a></code> | <code>string</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway">VpnGateway</a></code> | <code>string</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface">VpnGatewayInterface</a></code> | <code>double</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#name ComputeVpnTunnel#name}

---

##### `CipherSuite`<sup>Optional</sup> <a name="CipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.cipherSuite"></a>

```csharp
public ComputeVpnTunnelCipherSuite CipherSuite { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

cipher_suite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#cipher_suite ComputeVpnTunnel#cipher_suite}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#deletion_policy ComputeVpnTunnel#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#description ComputeVpnTunnel#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IkeVersion`<sup>Optional</sup> <a name="IkeVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion"></a>

```csharp
public double IkeVersion { get; set; }
```

- *Type:* double

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#ike_version ComputeVpnTunnel#ike_version}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#labels ComputeVpnTunnel#labels}

---

##### `LocalTrafficSelector`<sup>Optional</sup> <a name="LocalTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector"></a>

```csharp
public string[] LocalTrafficSelector { get; set; }
```

- *Type:* string[]

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#local_traffic_selector ComputeVpnTunnel#local_traffic_selector}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.params"></a>

```csharp
public ComputeVpnTunnelParams Params { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#params ComputeVpnTunnel#params}

---

##### `PeerExternalGateway`<sup>Optional</sup> <a name="PeerExternalGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway"></a>

```csharp
public string PeerExternalGateway { get; set; }
```

- *Type:* string

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#peer_external_gateway ComputeVpnTunnel#peer_external_gateway}

---

##### `PeerExternalGatewayInterface`<sup>Optional</sup> <a name="PeerExternalGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface"></a>

```csharp
public double PeerExternalGatewayInterface { get; set; }
```

- *Type:* double

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#peer_external_gateway_interface ComputeVpnTunnel#peer_external_gateway_interface}

---

##### `PeerGcpGateway`<sup>Optional</sup> <a name="PeerGcpGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway"></a>

```csharp
public string PeerGcpGateway { get; set; }
```

- *Type:* string

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#peer_gcp_gateway ComputeVpnTunnel#peer_gcp_gateway}

---

##### `PeerIp`<sup>Optional</sup> <a name="PeerIp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp"></a>

```csharp
public string PeerIp { get; set; }
```

- *Type:* string

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#peer_ip ComputeVpnTunnel#peer_ip}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#region ComputeVpnTunnel#region}

---

##### `RemoteTrafficSelector`<sup>Optional</sup> <a name="RemoteTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector"></a>

```csharp
public string[] RemoteTrafficSelector { get; set; }
```

- *Type:* string[]

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#remote_traffic_selector ComputeVpnTunnel#remote_traffic_selector}

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router"></a>

```csharp
public string Router { get; set; }
```

- *Type:* string

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#router ComputeVpnTunnel#router}

---

##### `SharedSecret`<sup>Optional</sup> <a name="SharedSecret" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret"></a>

```csharp
public string SharedSecret { get; set; }
```

- *Type:* string

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#shared_secret ComputeVpnTunnel#shared_secret}

---

##### `SharedSecretWo`<sup>Optional</sup> <a name="SharedSecretWo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecretWo"></a>

```csharp
public string SharedSecretWo { get; set; }
```

- *Type:* string

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#shared_secret_wo ComputeVpnTunnel#shared_secret_wo}

---

##### `SharedSecretWoVersion`<sup>Optional</sup> <a name="SharedSecretWoVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecretWoVersion"></a>

```csharp
public string SharedSecretWoVersion { get; set; }
```

- *Type:* string

Triggers update of 'shared_secret_wo' write-only.

Increment this value when an update to 'shared_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#shared_secret_wo_version ComputeVpnTunnel#shared_secret_wo_version}

---

##### `TargetVpnGateway`<sup>Optional</sup> <a name="TargetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway"></a>

```csharp
public string TargetVpnGateway { get; set; }
```

- *Type:* string

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#target_vpn_gateway ComputeVpnTunnel#target_vpn_gateway}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts"></a>

```csharp
public ComputeVpnTunnelTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#timeouts ComputeVpnTunnel#timeouts}

---

##### `VpnGateway`<sup>Optional</sup> <a name="VpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway"></a>

```csharp
public string VpnGateway { get; set; }
```

- *Type:* string

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#vpn_gateway ComputeVpnTunnel#vpn_gateway}

---

##### `VpnGatewayInterface`<sup>Optional</sup> <a name="VpnGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface"></a>

```csharp
public double VpnGatewayInterface { get; set; }
```

- *Type:* double

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#vpn_gateway_interface ComputeVpnTunnel#vpn_gateway_interface}

---

### ComputeVpnTunnelParams <a name="ComputeVpnTunnelParams" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeVpnTunnelParams {
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource manager tags to be bound to the Vpn Tunnel. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource manager tags to be bound to the Vpn Tunnel.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#resource_manager_tags ComputeVpnTunnel#resource_manager_tags}

---

### ComputeVpnTunnelTimeouts <a name="ComputeVpnTunnelTimeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeVpnTunnelTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#update ComputeVpnTunnel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_vpn_tunnel#update ComputeVpnTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeVpnTunnelCipherSuiteOutputReference <a name="ComputeVpnTunnelCipherSuiteOutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeVpnTunnelCipherSuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPhase1` <a name="PutPhase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase1"></a>

```csharp
private void PutPhase1(ComputeVpnTunnelCipherSuitePhase1 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a>

---

##### `PutPhase2` <a name="PutPhase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase2"></a>

```csharp
private void PutPhase2(ComputeVpnTunnelCipherSuitePhase2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a>

---

##### `ResetPhase1` <a name="ResetPhase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resetPhase1"></a>

```csharp
private void ResetPhase1()
```

##### `ResetPhase2` <a name="ResetPhase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resetPhase2"></a>

```csharp
private void ResetPhase2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase1">Phase1</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference">ComputeVpnTunnelCipherSuitePhase1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase2">Phase2</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference">ComputeVpnTunnelCipherSuitePhase2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase1Input">Phase1Input</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase2Input">Phase2Input</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Phase1`<sup>Required</sup> <a name="Phase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase1"></a>

```csharp
public ComputeVpnTunnelCipherSuitePhase1OutputReference Phase1 { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference">ComputeVpnTunnelCipherSuitePhase1OutputReference</a>

---

##### `Phase2`<sup>Required</sup> <a name="Phase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase2"></a>

```csharp
public ComputeVpnTunnelCipherSuitePhase2OutputReference Phase2 { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference">ComputeVpnTunnelCipherSuitePhase2OutputReference</a>

---

##### `Phase1Input`<sup>Optional</sup> <a name="Phase1Input" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase1Input"></a>

```csharp
public ComputeVpnTunnelCipherSuitePhase1 Phase1Input { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a>

---

##### `Phase2Input`<sup>Optional</sup> <a name="Phase2Input" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase2Input"></a>

```csharp
public ComputeVpnTunnelCipherSuitePhase2 Phase2Input { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.internalValue"></a>

```csharp
public ComputeVpnTunnelCipherSuite InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

---


### ComputeVpnTunnelCipherSuitePhase1OutputReference <a name="ComputeVpnTunnelCipherSuitePhase1OutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeVpnTunnelCipherSuitePhase1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDh` <a name="ResetDh" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetDh"></a>

```csharp
private void ResetDh()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetIntegrity` <a name="ResetIntegrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetIntegrity"></a>

```csharp
private void ResetIntegrity()
```

##### `ResetPrf` <a name="ResetPrf" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetPrf"></a>

```csharp
private void ResetPrf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.dhInput">DhInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrityInput">IntegrityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.prfInput">PrfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.dh">Dh</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryption">Encryption</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrity">Integrity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.prf">Prf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DhInput`<sup>Optional</sup> <a name="DhInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.dhInput"></a>

```csharp
public string[] DhInput { get; }
```

- *Type:* string[]

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryptionInput"></a>

```csharp
public string[] EncryptionInput { get; }
```

- *Type:* string[]

---

##### `IntegrityInput`<sup>Optional</sup> <a name="IntegrityInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrityInput"></a>

```csharp
public string[] IntegrityInput { get; }
```

- *Type:* string[]

---

##### `PrfInput`<sup>Optional</sup> <a name="PrfInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.prfInput"></a>

```csharp
public string[] PrfInput { get; }
```

- *Type:* string[]

---

##### `Dh`<sup>Required</sup> <a name="Dh" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.dh"></a>

```csharp
public string[] Dh { get; }
```

- *Type:* string[]

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryption"></a>

```csharp
public string[] Encryption { get; }
```

- *Type:* string[]

---

##### `Integrity`<sup>Required</sup> <a name="Integrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrity"></a>

```csharp
public string[] Integrity { get; }
```

- *Type:* string[]

---

##### `Prf`<sup>Required</sup> <a name="Prf" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.prf"></a>

```csharp
public string[] Prf { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.internalValue"></a>

```csharp
public ComputeVpnTunnelCipherSuitePhase1 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a>

---


### ComputeVpnTunnelCipherSuitePhase2OutputReference <a name="ComputeVpnTunnelCipherSuitePhase2OutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeVpnTunnelCipherSuitePhase2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetIntegrity` <a name="ResetIntegrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetIntegrity"></a>

```csharp
private void ResetIntegrity()
```

##### `ResetPfs` <a name="ResetPfs" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetPfs"></a>

```csharp
private void ResetPfs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrityInput">IntegrityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfsInput">PfsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryption">Encryption</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrity">Integrity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfs">Pfs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryptionInput"></a>

```csharp
public string[] EncryptionInput { get; }
```

- *Type:* string[]

---

##### `IntegrityInput`<sup>Optional</sup> <a name="IntegrityInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrityInput"></a>

```csharp
public string[] IntegrityInput { get; }
```

- *Type:* string[]

---

##### `PfsInput`<sup>Optional</sup> <a name="PfsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfsInput"></a>

```csharp
public string[] PfsInput { get; }
```

- *Type:* string[]

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryption"></a>

```csharp
public string[] Encryption { get; }
```

- *Type:* string[]

---

##### `Integrity`<sup>Required</sup> <a name="Integrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrity"></a>

```csharp
public string[] Integrity { get; }
```

- *Type:* string[]

---

##### `Pfs`<sup>Required</sup> <a name="Pfs" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfs"></a>

```csharp
public string[] Pfs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.internalValue"></a>

```csharp
public ComputeVpnTunnelCipherSuitePhase2 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a>

---


### ComputeVpnTunnelParamsOutputReference <a name="ComputeVpnTunnelParamsOutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeVpnTunnelParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.internalValue"></a>

```csharp
public ComputeVpnTunnelParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

---


### ComputeVpnTunnelTimeoutsOutputReference <a name="ComputeVpnTunnelTimeoutsOutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeVpnTunnelTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeVpnTunnelTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---



