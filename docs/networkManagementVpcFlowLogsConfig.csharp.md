# `networkManagementVpcFlowLogsConfig` Submodule <a name="`networkManagementVpcFlowLogsConfig` Submodule" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagementVpcFlowLogsConfig <a name="NetworkManagementVpcFlowLogsConfig" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config google_network_management_vpc_flow_logs_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkManagementVpcFlowLogsConfig(Construct Scope, string Id, NetworkManagementVpcFlowLogsConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig">NetworkManagementVpcFlowLogsConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig">NetworkManagementVpcFlowLogsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetAggregationInterval">ResetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetFilterExpr">ResetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetFlowSampling">ResetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetInterconnectAttachment">ResetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetMetadataFields">ResetMetadataFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetSubnet">ResetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetVpnTunnel">ResetVpnTunnel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkManagementVpcFlowLogsConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a>

---

##### `ResetAggregationInterval` <a name="ResetAggregationInterval" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetAggregationInterval"></a>

```csharp
private void ResetAggregationInterval()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilterExpr` <a name="ResetFilterExpr" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetFilterExpr"></a>

```csharp
private void ResetFilterExpr()
```

##### `ResetFlowSampling` <a name="ResetFlowSampling" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetFlowSampling"></a>

```csharp
private void ResetFlowSampling()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInterconnectAttachment` <a name="ResetInterconnectAttachment" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetInterconnectAttachment"></a>

```csharp
private void ResetInterconnectAttachment()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMetadataFields` <a name="ResetMetadataFields" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetMetadataFields"></a>

```csharp
private void ResetMetadataFields()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetSubnet"></a>

```csharp
private void ResetSubnet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpnTunnel` <a name="ResetVpnTunnel" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetVpnTunnel"></a>

```csharp
private void ResetVpnTunnel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkManagementVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkManagementVpcFlowLogsConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkManagementVpcFlowLogsConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkManagementVpcFlowLogsConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkManagementVpcFlowLogsConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkManagementVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkManagementVpcFlowLogsConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkManagementVpcFlowLogsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkManagementVpcFlowLogsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.targetResourceState">TargetResourceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.aggregationIntervalInput">AggregationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.filterExprInput">FilterExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.flowSamplingInput">FlowSamplingInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.interconnectAttachmentInput">InterconnectAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataFieldsInput">MetadataFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.subnetInput">SubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput">VpcFlowLogsConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpnTunnelInput">VpnTunnelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.aggregationInterval">AggregationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.filterExpr">FilterExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.flowSampling">FlowSampling</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.interconnectAttachment">InterconnectAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataFields">MetadataFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.subnet">Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigId">VpcFlowLogsConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpnTunnel">VpnTunnel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TargetResourceState`<sup>Required</sup> <a name="TargetResourceState" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.targetResourceState"></a>

```csharp
public string TargetResourceState { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.timeouts"></a>

```csharp
public NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AggregationIntervalInput`<sup>Optional</sup> <a name="AggregationIntervalInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.aggregationIntervalInput"></a>

```csharp
public string AggregationIntervalInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilterExprInput`<sup>Optional</sup> <a name="FilterExprInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.filterExprInput"></a>

```csharp
public string FilterExprInput { get; }
```

- *Type:* string

---

##### `FlowSamplingInput`<sup>Optional</sup> <a name="FlowSamplingInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.flowSamplingInput"></a>

```csharp
public double FlowSamplingInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterconnectAttachmentInput`<sup>Optional</sup> <a name="InterconnectAttachmentInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.interconnectAttachmentInput"></a>

```csharp
public string InterconnectAttachmentInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetadataFieldsInput`<sup>Optional</sup> <a name="MetadataFieldsInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataFieldsInput"></a>

```csharp
public string[] MetadataFieldsInput { get; }
```

- *Type:* string[]

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.subnetInput"></a>

```csharp
public string SubnetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkManagementVpcFlowLogsConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a>

---

##### `VpcFlowLogsConfigIdInput`<sup>Optional</sup> <a name="VpcFlowLogsConfigIdInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput"></a>

```csharp
public string VpcFlowLogsConfigIdInput { get; }
```

- *Type:* string

---

##### `VpnTunnelInput`<sup>Optional</sup> <a name="VpnTunnelInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpnTunnelInput"></a>

```csharp
public string VpnTunnelInput { get; }
```

- *Type:* string

---

##### `AggregationInterval`<sup>Required</sup> <a name="AggregationInterval" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.aggregationInterval"></a>

```csharp
public string AggregationInterval { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FilterExpr`<sup>Required</sup> <a name="FilterExpr" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.filterExpr"></a>

```csharp
public string FilterExpr { get; }
```

- *Type:* string

---

##### `FlowSampling`<sup>Required</sup> <a name="FlowSampling" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.flowSampling"></a>

```csharp
public double FlowSampling { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterconnectAttachment`<sup>Required</sup> <a name="InterconnectAttachment" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.interconnectAttachment"></a>

```csharp
public string InterconnectAttachment { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataFields"></a>

```csharp
public string[] MetadataFields { get; }
```

- *Type:* string[]

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.subnet"></a>

```csharp
public string Subnet { get; }
```

- *Type:* string

---

##### `VpcFlowLogsConfigId`<sup>Required</sup> <a name="VpcFlowLogsConfigId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigId"></a>

```csharp
public string VpcFlowLogsConfigId { get; }
```

- *Type:* string

---

##### `VpnTunnel`<sup>Required</sup> <a name="VpnTunnel" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpnTunnel"></a>

```csharp
public string VpnTunnel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagementVpcFlowLogsConfigConfig <a name="NetworkManagementVpcFlowLogsConfigConfig" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkManagementVpcFlowLogsConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string VpcFlowLogsConfigId,
    string AggregationInterval = null,
    string DeletionPolicy = null,
    string Description = null,
    string FilterExpr = null,
    double FlowSampling = null,
    string Id = null,
    string InterconnectAttachment = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Metadata = null,
    string[] MetadataFields = null,
    string Network = null,
    string Project = null,
    string State = null,
    string Subnet = null,
    NetworkManagementVpcFlowLogsConfigTimeouts Timeouts = null,
    string VpnTunnel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId">VpcFlowLogsConfigId</a></code> | <code>string</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.aggregationInterval">AggregationInterval</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.description">Description</a></code> | <code>string</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.filterExpr">FilterExpr</a></code> | <code>string</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.flowSampling">FlowSampling</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#id NetworkManagementVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.interconnectAttachment">InterconnectAttachment</a></code> | <code>string</code> | Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.metadata">Metadata</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.metadataFields">MetadataFields</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.network">Network</a></code> | <code>string</code> | Traffic will be logged from VMs, VPN tunnels and Interconnect Attachments within the network. Format: projects/{project_id}/global/networks/{name}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#project NetworkManagementVpcFlowLogsConfig#project}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.state">State</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.subnet">Subnet</a></code> | <code>string</code> | Traffic will be logged from VMs within the subnetwork. Format: projects/{project_id}/regions/{region}/subnetworks/{name}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.vpnTunnel">VpnTunnel</a></code> | <code>string</code> | Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#location NetworkManagementVpcFlowLogsConfig#location}

---

##### `VpcFlowLogsConfigId`<sup>Required</sup> <a name="VpcFlowLogsConfigId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId"></a>

```csharp
public string VpcFlowLogsConfigId { get; set; }
```

- *Type:* string

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#vpc_flow_logs_config_id NetworkManagementVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `AggregationInterval`<sup>Optional</sup> <a name="AggregationInterval" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.aggregationInterval"></a>

```csharp
public string AggregationInterval { get; set; }
```

- *Type:* string

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values:  AGGREGATION_INTERVAL_UNSPECIFIED INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#aggregation_interval NetworkManagementVpcFlowLogsConfig#aggregation_interval}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#deletion_policy NetworkManagementVpcFlowLogsConfig#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#description NetworkManagementVpcFlowLogsConfig#description}

---

##### `FilterExpr`<sup>Optional</sup> <a name="FilterExpr" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.filterExpr"></a>

```csharp
public string FilterExpr { get; set; }
```

- *Type:* string

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#filter_expr NetworkManagementVpcFlowLogsConfig#filter_expr}

---

##### `FlowSampling`<sup>Optional</sup> <a name="FlowSampling" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.flowSampling"></a>

```csharp
public double FlowSampling { get; set; }
```

- *Type:* double

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#flow_sampling NetworkManagementVpcFlowLogsConfig#flow_sampling}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#id NetworkManagementVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterconnectAttachment`<sup>Optional</sup> <a name="InterconnectAttachment" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.interconnectAttachment"></a>

```csharp
public string InterconnectAttachment { get; set; }
```

- *Type:* string

Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#interconnect_attachment NetworkManagementVpcFlowLogsConfig#interconnect_attachment}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#labels NetworkManagementVpcFlowLogsConfig#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#metadata NetworkManagementVpcFlowLogsConfig#metadata}

---

##### `MetadataFields`<sup>Optional</sup> <a name="MetadataFields" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.metadataFields"></a>

```csharp
public string[] MetadataFields { get; set; }
```

- *Type:* string[]

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#metadata_fields NetworkManagementVpcFlowLogsConfig#metadata_fields}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Traffic will be logged from VMs, VPN tunnels and Interconnect Attachments within the network. Format: projects/{project_id}/global/networks/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#network NetworkManagementVpcFlowLogsConfig#network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#project NetworkManagementVpcFlowLogsConfig#project}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.
Possible values: STATE_UNSPECIFIED ENABLED DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#state NetworkManagementVpcFlowLogsConfig#state}

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.subnet"></a>

```csharp
public string Subnet { get; set; }
```

- *Type:* string

Traffic will be logged from VMs within the subnetwork. Format: projects/{project_id}/regions/{region}/subnetworks/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#subnet NetworkManagementVpcFlowLogsConfig#subnet}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.timeouts"></a>

```csharp
public NetworkManagementVpcFlowLogsConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#timeouts NetworkManagementVpcFlowLogsConfig#timeouts}

---

##### `VpnTunnel`<sup>Optional</sup> <a name="VpnTunnel" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.vpnTunnel"></a>

```csharp
public string VpnTunnel { get; set; }
```

- *Type:* string

Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#vpn_tunnel NetworkManagementVpcFlowLogsConfig#vpn_tunnel}

---

### NetworkManagementVpcFlowLogsConfigTimeouts <a name="NetworkManagementVpcFlowLogsConfigTimeouts" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkManagementVpcFlowLogsConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#create NetworkManagementVpcFlowLogsConfig#create}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#delete NetworkManagementVpcFlowLogsConfig#delete}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#update NetworkManagementVpcFlowLogsConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#create NetworkManagementVpcFlowLogsConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#delete NetworkManagementVpcFlowLogsConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_management_vpc_flow_logs_config#update NetworkManagementVpcFlowLogsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference <a name="NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkManagementVpcFlowLogsConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a>

---



