# `dnsManagedZone` Submodule <a name="`dnsManagedZone` Submodule" id="@cdktn/provider-google.dnsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsManagedZone <a name="DnsManagedZone" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone google_dns_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZone(Construct Scope, string Id, DnsManagedZoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig">DnsManagedZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig">DnsManagedZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putCloudLoggingConfig">PutCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig">PutDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putForwardingConfig">PutForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putPeeringConfig">PutPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig">PutPrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetCloudLoggingConfig">ResetCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetDnssecConfig">ResetDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetForwardingConfig">ResetForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetPeeringConfig">ResetPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetPrivateVisibilityConfig">ResetPrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudLoggingConfig` <a name="PutCloudLoggingConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putCloudLoggingConfig"></a>

```csharp
private void PutCloudLoggingConfig(DnsManagedZoneCloudLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putCloudLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

---

##### `PutDnssecConfig` <a name="PutDnssecConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig"></a>

```csharp
private void PutDnssecConfig(DnsManagedZoneDnssecConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

---

##### `PutForwardingConfig` <a name="PutForwardingConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putForwardingConfig"></a>

```csharp
private void PutForwardingConfig(DnsManagedZoneForwardingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putForwardingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

---

##### `PutPeeringConfig` <a name="PutPeeringConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putPeeringConfig"></a>

```csharp
private void PutPeeringConfig(DnsManagedZonePeeringConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

---

##### `PutPrivateVisibilityConfig` <a name="PutPrivateVisibilityConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig"></a>

```csharp
private void PutPrivateVisibilityConfig(DnsManagedZonePrivateVisibilityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts"></a>

```csharp
private void PutTimeouts(DnsManagedZoneTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

---

##### `ResetCloudLoggingConfig` <a name="ResetCloudLoggingConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetCloudLoggingConfig"></a>

```csharp
private void ResetCloudLoggingConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDnssecConfig` <a name="ResetDnssecConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetDnssecConfig"></a>

```csharp
private void ResetDnssecConfig()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetForwardingConfig` <a name="ResetForwardingConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetForwardingConfig"></a>

```csharp
private void ResetForwardingConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPeeringConfig` <a name="ResetPeeringConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetPeeringConfig"></a>

```csharp
private void ResetPeeringConfig()
```

##### `ResetPrivateVisibilityConfig` <a name="ResetPrivateVisibilityConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetPrivateVisibilityConfig"></a>

```csharp
private void ResetPrivateVisibilityConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.resetVisibility"></a>

```csharp
private void ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DnsManagedZone resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DnsManagedZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DnsManagedZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DnsManagedZone.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DnsManagedZone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DnsManagedZone resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsManagedZone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsManagedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DnsManagedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfig">CloudLoggingConfig</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference">DnsManagedZoneCloudLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfig">DnssecConfig</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference">DnsManagedZoneDnssecConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfig">ForwardingConfig</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference">DnsManagedZoneForwardingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.managedZoneId">ManagedZoneId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.nameServers">NameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfig">PeeringConfig</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference">DnsManagedZonePeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfig">PrivateVisibilityConfig</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference">DnsManagedZonePrivateVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference">DnsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfigInput">CloudLoggingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.dnsNameInput">DnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfigInput">DnssecConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfigInput">ForwardingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfigInput">PeeringConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfigInput">PrivateVisibilityConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudLoggingConfig`<sup>Required</sup> <a name="CloudLoggingConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfig"></a>

```csharp
public DnsManagedZoneCloudLoggingConfigOutputReference CloudLoggingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference">DnsManagedZoneCloudLoggingConfigOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DnssecConfig`<sup>Required</sup> <a name="DnssecConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfig"></a>

```csharp
public DnsManagedZoneDnssecConfigOutputReference DnssecConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference">DnsManagedZoneDnssecConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ForwardingConfig`<sup>Required</sup> <a name="ForwardingConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfig"></a>

```csharp
public DnsManagedZoneForwardingConfigOutputReference ForwardingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference">DnsManagedZoneForwardingConfigOutputReference</a>

---

##### `ManagedZoneId`<sup>Required</sup> <a name="ManagedZoneId" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.managedZoneId"></a>

```csharp
public double ManagedZoneId { get; }
```

- *Type:* double

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.nameServers"></a>

```csharp
public string[] NameServers { get; }
```

- *Type:* string[]

---

##### `PeeringConfig`<sup>Required</sup> <a name="PeeringConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfig"></a>

```csharp
public DnsManagedZonePeeringConfigOutputReference PeeringConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference">DnsManagedZonePeeringConfigOutputReference</a>

---

##### `PrivateVisibilityConfig`<sup>Required</sup> <a name="PrivateVisibilityConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfig"></a>

```csharp
public DnsManagedZonePrivateVisibilityConfigOutputReference PrivateVisibilityConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference">DnsManagedZonePrivateVisibilityConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.timeouts"></a>

```csharp
public DnsManagedZoneTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference">DnsManagedZoneTimeoutsOutputReference</a>

---

##### `CloudLoggingConfigInput`<sup>Optional</sup> <a name="CloudLoggingConfigInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfigInput"></a>

```csharp
public DnsManagedZoneCloudLoggingConfig CloudLoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.dnsNameInput"></a>

```csharp
public string DnsNameInput { get; }
```

- *Type:* string

---

##### `DnssecConfigInput`<sup>Optional</sup> <a name="DnssecConfigInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfigInput"></a>

```csharp
public DnsManagedZoneDnssecConfig DnssecConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroyInput"></a>

```csharp
public bool|IResolvable ForceDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardingConfigInput`<sup>Optional</sup> <a name="ForwardingConfigInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfigInput"></a>

```csharp
public DnsManagedZoneForwardingConfig ForwardingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeeringConfigInput`<sup>Optional</sup> <a name="PeeringConfigInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfigInput"></a>

```csharp
public DnsManagedZonePeeringConfig PeeringConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

---

##### `PrivateVisibilityConfigInput`<sup>Optional</sup> <a name="PrivateVisibilityConfigInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfigInput"></a>

```csharp
public DnsManagedZonePrivateVisibilityConfig PrivateVisibilityConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.timeoutsInput"></a>

```csharp
public IResolvable|DnsManagedZoneTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsManagedZoneCloudLoggingConfig <a name="DnsManagedZoneCloudLoggingConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneCloudLoggingConfig {
    bool|IResolvable EnableLogging
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig.property.enableLogging">EnableLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, enable query logging for this ManagedZone. False by default, making logging opt-in. |

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig.property.enableLogging"></a>

```csharp
public bool|IResolvable EnableLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, enable query logging for this ManagedZone. False by default, making logging opt-in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#enable_logging DnsManagedZone#enable_logging}

---

### DnsManagedZoneConfig <a name="DnsManagedZoneConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DnsName,
    string Name,
    DnsManagedZoneCloudLoggingConfig CloudLoggingConfig = null,
    string DeletionPolicy = null,
    string Description = null,
    DnsManagedZoneDnssecConfig DnssecConfig = null,
    bool|IResolvable ForceDestroy = null,
    DnsManagedZoneForwardingConfig ForwardingConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    DnsManagedZonePeeringConfig PeeringConfig = null,
    DnsManagedZonePrivateVisibilityConfig PrivateVisibilityConfig = null,
    string Project = null,
    DnsManagedZoneTimeouts Timeouts = null,
    string Visibility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnsName">DnsName</a></code> | <code>string</code> | The DNS name of this managed zone, for instance "example.com.". |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.name">Name</a></code> | <code>string</code> | User assigned name for this resource. Must be unique within the project. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.cloudLoggingConfig">CloudLoggingConfig</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | cloud_logging_config block. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.description">Description</a></code> | <code>string</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnssecConfig">DnssecConfig</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | dnssec_config block. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this true to delete all records in the zone. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forwardingConfig">ForwardingConfig</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | forwarding_config block. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#id DnsManagedZone#id}. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs to assign to this ManagedZone. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.peeringConfig">PeeringConfig</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | peering_config block. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.privateVisibilityConfig">PrivateVisibilityConfig</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | private_visibility_config block. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#project DnsManagedZone#project}. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.visibility">Visibility</a></code> | <code>string</code> | The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnsName"></a>

```csharp
public string DnsName { get; set; }
```

- *Type:* string

The DNS name of this managed zone, for instance "example.com.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#dns_name DnsManagedZone#dns_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

User assigned name for this resource. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#name DnsManagedZone#name}

---

##### `CloudLoggingConfig`<sup>Optional</sup> <a name="CloudLoggingConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.cloudLoggingConfig"></a>

```csharp
public DnsManagedZoneCloudLoggingConfig CloudLoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

cloud_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#cloud_logging_config DnsManagedZone#cloud_logging_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#deletion_policy DnsManagedZone#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#description DnsManagedZone#description}

---

##### `DnssecConfig`<sup>Optional</sup> <a name="DnssecConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnssecConfig"></a>

```csharp
public DnsManagedZoneDnssecConfig DnssecConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

dnssec_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#dnssec_config DnsManagedZone#dnssec_config}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this true to delete all records in the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#force_destroy DnsManagedZone#force_destroy}

---

##### `ForwardingConfig`<sup>Optional</sup> <a name="ForwardingConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forwardingConfig"></a>

```csharp
public DnsManagedZoneForwardingConfig ForwardingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

forwarding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#forwarding_config DnsManagedZone#forwarding_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#id DnsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs to assign to this ManagedZone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#labels DnsManagedZone#labels}

---

##### `PeeringConfig`<sup>Optional</sup> <a name="PeeringConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.peeringConfig"></a>

```csharp
public DnsManagedZonePeeringConfig PeeringConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#peering_config DnsManagedZone#peering_config}

---

##### `PrivateVisibilityConfig`<sup>Optional</sup> <a name="PrivateVisibilityConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.privateVisibilityConfig"></a>

```csharp
public DnsManagedZonePrivateVisibilityConfig PrivateVisibilityConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

private_visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#private_visibility_config DnsManagedZone#private_visibility_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#project DnsManagedZone#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.timeouts"></a>

```csharp
public DnsManagedZoneTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#timeouts DnsManagedZone#timeouts}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.

Default value: "public" Possible values: ["private", "public"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#visibility DnsManagedZone#visibility}

---

### DnsManagedZoneDnssecConfig <a name="DnsManagedZoneDnssecConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneDnssecConfig {
    IResolvable|DnsManagedZoneDnssecConfigDefaultKeySpecs[] DefaultKeySpecs = null,
    string Kind = null,
    string NonExistence = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.defaultKeySpecs">DefaultKeySpecs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>[]</code> | default_key_specs block. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.kind">Kind</a></code> | <code>string</code> | Identifies what kind of resource this is. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.nonExistence">NonExistence</a></code> | <code>string</code> | Specifies the mechanism used to provide authenticated denial-of-existence responses. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.state">State</a></code> | <code>string</code> | Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"]. |

---

##### `DefaultKeySpecs`<sup>Optional</sup> <a name="DefaultKeySpecs" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.defaultKeySpecs"></a>

```csharp
public IResolvable|DnsManagedZoneDnssecConfigDefaultKeySpecs[] DefaultKeySpecs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>[]

default_key_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#default_key_specs DnsManagedZone#default_key_specs}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#kind DnsManagedZone#kind}

---

##### `NonExistence`<sup>Optional</sup> <a name="NonExistence" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.nonExistence"></a>

```csharp
public string NonExistence { get; set; }
```

- *Type:* string

Specifies the mechanism used to provide authenticated denial-of-existence responses.

non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#non_existence DnsManagedZone#non_existence}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#state DnsManagedZone#state}

---

### DnsManagedZoneDnssecConfigDefaultKeySpecs <a name="DnsManagedZoneDnssecConfigDefaultKeySpecs" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneDnssecConfigDefaultKeySpecs {
    string Algorithm = null,
    double KeyLength = null,
    string KeyType = null,
    string Kind = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm">Algorithm</a></code> | <code>string</code> | String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"]. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength">KeyLength</a></code> | <code>double</code> | Length of the keys in bits. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType">KeyType</a></code> | <code>string</code> | Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind">Kind</a></code> | <code>string</code> | Identifies what kind of resource this is. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#algorithm DnsManagedZone#algorithm}

---

##### `KeyLength`<sup>Optional</sup> <a name="KeyLength" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength"></a>

```csharp
public double KeyLength { get; set; }
```

- *Type:* double

Length of the keys in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#key_length DnsManagedZone#key_length}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK).

Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#key_type DnsManagedZone#key_type}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#kind DnsManagedZone#kind}

---

### DnsManagedZoneForwardingConfig <a name="DnsManagedZoneForwardingConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneForwardingConfig {
    IResolvable|DnsManagedZoneForwardingConfigTargetNameServers[] TargetNameServers
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig.property.targetNameServers">TargetNameServers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>[]</code> | target_name_servers block. |

---

##### `TargetNameServers`<sup>Required</sup> <a name="TargetNameServers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig.property.targetNameServers"></a>

```csharp
public IResolvable|DnsManagedZoneForwardingConfigTargetNameServers[] TargetNameServers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>[]

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#target_name_servers DnsManagedZone#target_name_servers}

---

### DnsManagedZoneForwardingConfigTargetNameServers <a name="DnsManagedZoneForwardingConfigTargetNameServers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneForwardingConfigTargetNameServers {
    string DomainName = null,
    string ForwardingPath = null,
    string Ipv4Address = null,
    string Ipv6Address = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.domainName">DomainName</a></code> | <code>string</code> | Fully qualified domain name for the forwarding target. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath">ForwardingPath</a></code> | <code>string</code> | Forwarding path for this TargetNameServer. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | IPv4 address of a target name server. Does not accept both fields (ipv4 & ipv6) being populated. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | IPv6 address of a target name server. Does not accept both fields (ipv4 & ipv6) being populated. |

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Fully qualified domain name for the forwarding target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#domain_name DnsManagedZone#domain_name}

---

##### `ForwardingPath`<sup>Optional</sup> <a name="ForwardingPath" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath"></a>

```csharp
public string ForwardingPath { get; set; }
```

- *Type:* string

Forwarding path for this TargetNameServer.

If unset or 'default'
Cloud DNS will make forwarding decision based on address ranges,
i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always
send queries through VPC for this target. Possible values: ["default", "private"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#forwarding_path DnsManagedZone#forwarding_path}

---

##### `Ipv4Address`<sup>Optional</sup> <a name="Ipv4Address" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; set; }
```

- *Type:* string

IPv4 address of a target name server. Does not accept both fields (ipv4 & ipv6) being populated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#ipv4_address DnsManagedZone#ipv4_address}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

IPv6 address of a target name server. Does not accept both fields (ipv4 & ipv6) being populated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#ipv6_address DnsManagedZone#ipv6_address}

---

### DnsManagedZonePeeringConfig <a name="DnsManagedZonePeeringConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZonePeeringConfig {
    DnsManagedZonePeeringConfigTargetNetwork TargetNetwork
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a></code> | target_network block. |

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig.property.targetNetwork"></a>

```csharp
public DnsManagedZonePeeringConfigTargetNetwork TargetNetwork { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

target_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#target_network DnsManagedZone#target_network}

---

### DnsManagedZonePeeringConfigTargetNetwork <a name="DnsManagedZonePeeringConfigTargetNetwork" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZonePeeringConfigTargetNetwork {
    string NetworkUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The id or fully qualified URL of the VPC network to forward queries to. |

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#network_url DnsManagedZone#network_url}

---

### DnsManagedZonePrivateVisibilityConfig <a name="DnsManagedZonePrivateVisibilityConfig" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZonePrivateVisibilityConfig {
    IResolvable|DnsManagedZonePrivateVisibilityConfigGkeClusters[] GkeClusters = null,
    IResolvable|DnsManagedZonePrivateVisibilityConfigNetworks[] Networks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.gkeClusters">GkeClusters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>[]</code> | gke_clusters block. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.networks">Networks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>[]</code> | networks block. |

---

##### `GkeClusters`<sup>Optional</sup> <a name="GkeClusters" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.gkeClusters"></a>

```csharp
public IResolvable|DnsManagedZonePrivateVisibilityConfigGkeClusters[] GkeClusters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>[]

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#gke_clusters DnsManagedZone#gke_clusters}

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.networks"></a>

```csharp
public IResolvable|DnsManagedZonePrivateVisibilityConfigNetworks[] Networks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>[]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#networks DnsManagedZone#networks}

---

### DnsManagedZonePrivateVisibilityConfigGkeClusters <a name="DnsManagedZonePrivateVisibilityConfigGkeClusters" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZonePrivateVisibilityConfigGkeClusters {
    string GkeClusterName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName">GkeClusterName</a></code> | <code>string</code> | The resource name of the cluster to bind this ManagedZone to. |

---

##### `GkeClusterName`<sup>Required</sup> <a name="GkeClusterName" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName"></a>

```csharp
public string GkeClusterName { get; set; }
```

- *Type:* string

The resource name of the cluster to bind this ManagedZone to.

This should be specified in the format like
'projects/* /locations/* /clusters/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#gke_cluster_name DnsManagedZone#gke_cluster_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DnsManagedZonePrivateVisibilityConfigNetworks <a name="DnsManagedZonePrivateVisibilityConfigNetworks" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZonePrivateVisibilityConfigNetworks {
    string NetworkUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'. |

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#network_url DnsManagedZone#network_url}

---

### DnsManagedZoneTimeouts <a name="DnsManagedZoneTimeouts" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#create DnsManagedZone#create}. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#delete DnsManagedZone#delete}. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#update DnsManagedZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#create DnsManagedZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#delete DnsManagedZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dns_managed_zone#update DnsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsManagedZoneCloudLoggingConfigOutputReference <a name="DnsManagedZoneCloudLoggingConfigOutputReference" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneCloudLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging">EnableLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput"></a>

```csharp
public bool|IResolvable EnableLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging"></a>

```csharp
public bool|IResolvable EnableLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public DnsManagedZoneCloudLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

---


### DnsManagedZoneDnssecConfigDefaultKeySpecsList <a name="DnsManagedZoneDnssecConfigDefaultKeySpecsList" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneDnssecConfigDefaultKeySpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.get"></a>

```csharp
private DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue"></a>

```csharp
public IResolvable|DnsManagedZoneDnssecConfigDefaultKeySpecs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>[]

---


### DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference <a name="DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength">ResetKeyLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind">ResetKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetKeyLength` <a name="ResetKeyLength" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength"></a>

```csharp
private void ResetKeyLength()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType"></a>

```csharp
private void ResetKeyType()
```

##### `ResetKind` <a name="ResetKind" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind"></a>

```csharp
private void ResetKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput">KeyLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength">KeyLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `KeyLengthInput`<sup>Optional</sup> <a name="KeyLengthInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput"></a>

```csharp
public double KeyLengthInput { get; }
```

- *Type:* double

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `KeyLength`<sup>Required</sup> <a name="KeyLength" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength"></a>

```csharp
public double KeyLength { get; }
```

- *Type:* double

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DnsManagedZoneDnssecConfigDefaultKeySpecs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>

---


### DnsManagedZoneDnssecConfigOutputReference <a name="DnsManagedZoneDnssecConfigOutputReference" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneDnssecConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs">PutDefaultKeySpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs">ResetDefaultKeySpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetNonExistence">ResetNonExistence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultKeySpecs` <a name="PutDefaultKeySpecs" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs"></a>

```csharp
private void PutDefaultKeySpecs(IResolvable|DnsManagedZoneDnssecConfigDefaultKeySpecs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>[]

---

##### `ResetDefaultKeySpecs` <a name="ResetDefaultKeySpecs" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs"></a>

```csharp
private void ResetDefaultKeySpecs()
```

##### `ResetKind` <a name="ResetKind" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetNonExistence` <a name="ResetNonExistence" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetNonExistence"></a>

```csharp
private void ResetNonExistence()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs">DefaultKeySpecs</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList">DnsManagedZoneDnssecConfigDefaultKeySpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput">DefaultKeySpecsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput">NonExistenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistence">NonExistence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultKeySpecs`<sup>Required</sup> <a name="DefaultKeySpecs" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs"></a>

```csharp
public DnsManagedZoneDnssecConfigDefaultKeySpecsList DefaultKeySpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList">DnsManagedZoneDnssecConfigDefaultKeySpecsList</a>

---

##### `DefaultKeySpecsInput`<sup>Optional</sup> <a name="DefaultKeySpecsInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput"></a>

```csharp
public IResolvable|DnsManagedZoneDnssecConfigDefaultKeySpecs[] DefaultKeySpecsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>[]

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NonExistenceInput`<sup>Optional</sup> <a name="NonExistenceInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput"></a>

```csharp
public string NonExistenceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `NonExistence`<sup>Required</sup> <a name="NonExistence" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistence"></a>

```csharp
public string NonExistence { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.internalValue"></a>

```csharp
public DnsManagedZoneDnssecConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

---


### DnsManagedZoneForwardingConfigOutputReference <a name="DnsManagedZoneForwardingConfigOutputReference" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneForwardingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.putTargetNameServers">PutTargetNameServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetNameServers` <a name="PutTargetNameServers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.putTargetNameServers"></a>

```csharp
private void PutTargetNameServers(IResolvable|DnsManagedZoneForwardingConfigTargetNameServers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.putTargetNameServers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServers">TargetNameServers</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList">DnsManagedZoneForwardingConfigTargetNameServersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput">TargetNameServersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetNameServers`<sup>Required</sup> <a name="TargetNameServers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServers"></a>

```csharp
public DnsManagedZoneForwardingConfigTargetNameServersList TargetNameServers { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList">DnsManagedZoneForwardingConfigTargetNameServersList</a>

---

##### `TargetNameServersInput`<sup>Optional</sup> <a name="TargetNameServersInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput"></a>

```csharp
public IResolvable|DnsManagedZoneForwardingConfigTargetNameServers[] TargetNameServersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.internalValue"></a>

```csharp
public DnsManagedZoneForwardingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

---


### DnsManagedZoneForwardingConfigTargetNameServersList <a name="DnsManagedZoneForwardingConfigTargetNameServersList" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneForwardingConfigTargetNameServersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.get"></a>

```csharp
private DnsManagedZoneForwardingConfigTargetNameServersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue"></a>

```csharp
public IResolvable|DnsManagedZoneForwardingConfigTargetNameServers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>[]

---


### DnsManagedZoneForwardingConfigTargetNameServersOutputReference <a name="DnsManagedZoneForwardingConfigTargetNameServersOutputReference" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneForwardingConfigTargetNameServersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath">ResetForwardingPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetIpv4Address">ResetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetForwardingPath` <a name="ResetForwardingPath" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath"></a>

```csharp
private void ResetForwardingPath()
```

##### `ResetIpv4Address` <a name="ResetIpv4Address" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetIpv4Address"></a>

```csharp
private void ResetIpv4Address()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput">ForwardingPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath">ForwardingPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `ForwardingPathInput`<sup>Optional</sup> <a name="ForwardingPathInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput"></a>

```csharp
public string ForwardingPathInput { get; }
```

- *Type:* string

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput"></a>

```csharp
public string Ipv4AddressInput { get; }
```

- *Type:* string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `ForwardingPath`<sup>Required</sup> <a name="ForwardingPath" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath"></a>

```csharp
public string ForwardingPath { get; }
```

- *Type:* string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; }
```

- *Type:* string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DnsManagedZoneForwardingConfigTargetNameServers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>

---


### DnsManagedZonePeeringConfigOutputReference <a name="DnsManagedZonePeeringConfigOutputReference" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZonePeeringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.putTargetNetwork">PutTargetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetNetwork` <a name="PutTargetNetwork" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.putTargetNetwork"></a>

```csharp
private void PutTargetNetwork(DnsManagedZonePeeringConfigTargetNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.putTargetNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference">DnsManagedZonePeeringConfigTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetwork"></a>

```csharp
public DnsManagedZonePeeringConfigTargetNetworkOutputReference TargetNetwork { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference">DnsManagedZonePeeringConfigTargetNetworkOutputReference</a>

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput"></a>

```csharp
public DnsManagedZonePeeringConfigTargetNetwork TargetNetworkInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.internalValue"></a>

```csharp
public DnsManagedZonePeeringConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

---


### DnsManagedZonePeeringConfigTargetNetworkOutputReference <a name="DnsManagedZonePeeringConfigTargetNetworkOutputReference" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZonePeeringConfigTargetNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue"></a>

```csharp
public DnsManagedZonePeeringConfigTargetNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

---


### DnsManagedZonePrivateVisibilityConfigGkeClustersList <a name="DnsManagedZonePrivateVisibilityConfigGkeClustersList" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZonePrivateVisibilityConfigGkeClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.get"></a>

```csharp
private DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue"></a>

```csharp
public IResolvable|DnsManagedZonePrivateVisibilityConfigGkeClusters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>[]

---


### DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference <a name="DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput">GkeClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName">GkeClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GkeClusterNameInput`<sup>Optional</sup> <a name="GkeClusterNameInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput"></a>

```csharp
public string GkeClusterNameInput { get; }
```

- *Type:* string

---

##### `GkeClusterName`<sup>Required</sup> <a name="GkeClusterName" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName"></a>

```csharp
public string GkeClusterName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DnsManagedZonePrivateVisibilityConfigGkeClusters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>

---


### DnsManagedZonePrivateVisibilityConfigNetworksList <a name="DnsManagedZonePrivateVisibilityConfigNetworksList" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZonePrivateVisibilityConfigNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.get"></a>

```csharp
private DnsManagedZonePrivateVisibilityConfigNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue"></a>

```csharp
public IResolvable|DnsManagedZonePrivateVisibilityConfigNetworks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>[]

---


### DnsManagedZonePrivateVisibilityConfigNetworksOutputReference <a name="DnsManagedZonePrivateVisibilityConfigNetworksOutputReference" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZonePrivateVisibilityConfigNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DnsManagedZonePrivateVisibilityConfigNetworks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>

---


### DnsManagedZonePrivateVisibilityConfigOutputReference <a name="DnsManagedZonePrivateVisibilityConfigOutputReference" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZonePrivateVisibilityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters">PutGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters">ResetGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGkeClusters` <a name="PutGkeClusters" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters"></a>

```csharp
private void PutGkeClusters(IResolvable|DnsManagedZonePrivateVisibilityConfigGkeClusters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>[]

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks"></a>

```csharp
private void PutNetworks(IResolvable|DnsManagedZonePrivateVisibilityConfigNetworks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>[]

---

##### `ResetGkeClusters` <a name="ResetGkeClusters" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters"></a>

```csharp
private void ResetGkeClusters()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetNetworks"></a>

```csharp
private void ResetNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters">GkeClusters</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList">DnsManagedZonePrivateVisibilityConfigGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList">DnsManagedZonePrivateVisibilityConfigNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput">GkeClustersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput">NetworksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GkeClusters`<sup>Required</sup> <a name="GkeClusters" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters"></a>

```csharp
public DnsManagedZonePrivateVisibilityConfigGkeClustersList GkeClusters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList">DnsManagedZonePrivateVisibilityConfigGkeClustersList</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networks"></a>

```csharp
public DnsManagedZonePrivateVisibilityConfigNetworksList Networks { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList">DnsManagedZonePrivateVisibilityConfigNetworksList</a>

---

##### `GkeClustersInput`<sup>Optional</sup> <a name="GkeClustersInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput"></a>

```csharp
public IResolvable|DnsManagedZonePrivateVisibilityConfigGkeClusters[] GkeClustersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>[]

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput"></a>

```csharp
public IResolvable|DnsManagedZonePrivateVisibilityConfigNetworks[] NetworksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue"></a>

```csharp
public DnsManagedZonePrivateVisibilityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

---


### DnsManagedZoneTimeoutsOutputReference <a name="DnsManagedZoneTimeoutsOutputReference" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DnsManagedZoneTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DnsManagedZoneTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

---



