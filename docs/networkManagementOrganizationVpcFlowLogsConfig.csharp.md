# `networkManagementOrganizationVpcFlowLogsConfig` Submodule <a name="`networkManagementOrganizationVpcFlowLogsConfig` Submodule" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagementOrganizationVpcFlowLogsConfig <a name="NetworkManagementOrganizationVpcFlowLogsConfig" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config google_network_management_organization_vpc_flow_logs_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkManagementOrganizationVpcFlowLogsConfig(Construct Scope, string Id, NetworkManagementOrganizationVpcFlowLogsConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig">NetworkManagementOrganizationVpcFlowLogsConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig">NetworkManagementOrganizationVpcFlowLogsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval">ResetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata">ResetCrossProjectMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr">ResetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling">ResetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields">ResetMetadataFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkManagementOrganizationVpcFlowLogsConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---

##### `ResetAggregationInterval` <a name="ResetAggregationInterval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval"></a>

```csharp
private void ResetAggregationInterval()
```

##### `ResetCrossProjectMetadata` <a name="ResetCrossProjectMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata"></a>

```csharp
private void ResetCrossProjectMetadata()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilterExpr` <a name="ResetFilterExpr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr"></a>

```csharp
private void ResetFilterExpr()
```

##### `ResetFlowSampling` <a name="ResetFlowSampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling"></a>

```csharp
private void ResetFlowSampling()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMetadataFields` <a name="ResetMetadataFields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields"></a>

```csharp
private void ResetMetadataFields()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkManagementOrganizationVpcFlowLogsConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkManagementOrganizationVpcFlowLogsConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkManagementOrganizationVpcFlowLogsConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkManagementOrganizationVpcFlowLogsConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkManagementOrganizationVpcFlowLogsConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkManagementOrganizationVpcFlowLogsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkManagementOrganizationVpcFlowLogsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput">AggregationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput">CrossProjectMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput">FilterExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput">FlowSamplingInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput">MetadataFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput">VpcFlowLogsConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval">AggregationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata">CrossProjectMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr">FilterExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling">FlowSampling</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields">MetadataFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId">VpcFlowLogsConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts"></a>

```csharp
public NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AggregationIntervalInput`<sup>Optional</sup> <a name="AggregationIntervalInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput"></a>

```csharp
public string AggregationIntervalInput { get; }
```

- *Type:* string

---

##### `CrossProjectMetadataInput`<sup>Optional</sup> <a name="CrossProjectMetadataInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput"></a>

```csharp
public string CrossProjectMetadataInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilterExprInput`<sup>Optional</sup> <a name="FilterExprInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput"></a>

```csharp
public string FilterExprInput { get; }
```

- *Type:* string

---

##### `FlowSamplingInput`<sup>Optional</sup> <a name="FlowSamplingInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput"></a>

```csharp
public double FlowSamplingInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetadataFieldsInput`<sup>Optional</sup> <a name="MetadataFieldsInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput"></a>

```csharp
public string[] MetadataFieldsInput { get; }
```

- *Type:* string[]

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkManagementOrganizationVpcFlowLogsConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---

##### `VpcFlowLogsConfigIdInput`<sup>Optional</sup> <a name="VpcFlowLogsConfigIdInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput"></a>

```csharp
public string VpcFlowLogsConfigIdInput { get; }
```

- *Type:* string

---

##### `AggregationInterval`<sup>Required</sup> <a name="AggregationInterval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval"></a>

```csharp
public string AggregationInterval { get; }
```

- *Type:* string

---

##### `CrossProjectMetadata`<sup>Required</sup> <a name="CrossProjectMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata"></a>

```csharp
public string CrossProjectMetadata { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FilterExpr`<sup>Required</sup> <a name="FilterExpr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr"></a>

```csharp
public string FilterExpr { get; }
```

- *Type:* string

---

##### `FlowSampling`<sup>Required</sup> <a name="FlowSampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling"></a>

```csharp
public double FlowSampling { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields"></a>

```csharp
public string[] MetadataFields { get; }
```

- *Type:* string[]

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `VpcFlowLogsConfigId`<sup>Required</sup> <a name="VpcFlowLogsConfigId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId"></a>

```csharp
public string VpcFlowLogsConfigId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagementOrganizationVpcFlowLogsConfigConfig <a name="NetworkManagementOrganizationVpcFlowLogsConfigConfig" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkManagementOrganizationVpcFlowLogsConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Organization,
    string VpcFlowLogsConfigId,
    string AggregationInterval = null,
    string CrossProjectMetadata = null,
    string DeletionPolicy = null,
    string Description = null,
    string FilterExpr = null,
    double FlowSampling = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Metadata = null,
    string[] MetadataFields = null,
    string State = null,
    NetworkManagementOrganizationVpcFlowLogsConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization">Organization</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId">VpcFlowLogsConfigId</a></code> | <code>string</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval">AggregationInterval</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata">CrossProjectMetadata</a></code> | <code>string</code> | Determines whether to include cross project annotations in the logs. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description">Description</a></code> | <code>string</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr">FilterExpr</a></code> | <code>string</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling">FlowSampling</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Resource labels to represent the user-provided metadata. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata">Metadata</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields">MetadataFields</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state">State</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#location NetworkManagementOrganizationVpcFlowLogsConfig#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#organization NetworkManagementOrganizationVpcFlowLogsConfig#organization}

---

##### `VpcFlowLogsConfigId`<sup>Required</sup> <a name="VpcFlowLogsConfigId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId"></a>

```csharp
public string VpcFlowLogsConfigId { get; set; }
```

- *Type:* string

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#vpc_flow_logs_config_id NetworkManagementOrganizationVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `AggregationInterval`<sup>Optional</sup> <a name="AggregationInterval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval"></a>

```csharp
public string AggregationInterval { get; set; }
```

- *Type:* string

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values: INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#aggregation_interval NetworkManagementOrganizationVpcFlowLogsConfig#aggregation_interval}

---

##### `CrossProjectMetadata`<sup>Optional</sup> <a name="CrossProjectMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata"></a>

```csharp
public string CrossProjectMetadata { get; set; }
```

- *Type:* string

Determines whether to include cross project annotations in the logs.

This field is available only for organization configurations. If not
specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED.
Possible values:
CROSS_PROJECT_METADATA_ENABLED
CROSS_PROJECT_METADATA_DISABLED Possible values: ["CROSS_PROJECT_METADATA_ENABLED", "CROSS_PROJECT_METADATA_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#cross_project_metadata NetworkManagementOrganizationVpcFlowLogsConfig#cross_project_metadata}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#deletion_policy NetworkManagementOrganizationVpcFlowLogsConfig#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#description NetworkManagementOrganizationVpcFlowLogsConfig#description}

---

##### `FilterExpr`<sup>Optional</sup> <a name="FilterExpr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr"></a>

```csharp
public string FilterExpr { get; set; }
```

- *Type:* string

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#filter_expr NetworkManagementOrganizationVpcFlowLogsConfig#filter_expr}

---

##### `FlowSampling`<sup>Optional</sup> <a name="FlowSampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling"></a>

```csharp
public double FlowSampling { get; set; }
```

- *Type:* double

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#flow_sampling NetworkManagementOrganizationVpcFlowLogsConfig#flow_sampling}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Resource labels to represent the user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#labels NetworkManagementOrganizationVpcFlowLogsConfig#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata NetworkManagementOrganizationVpcFlowLogsConfig#metadata}

---

##### `MetadataFields`<sup>Optional</sup> <a name="MetadataFields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields"></a>

```csharp
public string[] MetadataFields { get; set; }
```

- *Type:* string[]

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata_fields NetworkManagementOrganizationVpcFlowLogsConfig#metadata_fields}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.
Possible values: ENABLED DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#state NetworkManagementOrganizationVpcFlowLogsConfig#state}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts"></a>

```csharp
public NetworkManagementOrganizationVpcFlowLogsConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#timeouts NetworkManagementOrganizationVpcFlowLogsConfig#timeouts}

---

### NetworkManagementOrganizationVpcFlowLogsConfigTimeouts <a name="NetworkManagementOrganizationVpcFlowLogsConfigTimeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkManagementOrganizationVpcFlowLogsConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#create NetworkManagementOrganizationVpcFlowLogsConfig#create}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#delete NetworkManagementOrganizationVpcFlowLogsConfig#delete}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#update NetworkManagementOrganizationVpcFlowLogsConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#create NetworkManagementOrganizationVpcFlowLogsConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#delete NetworkManagementOrganizationVpcFlowLogsConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_management_organization_vpc_flow_logs_config#update NetworkManagementOrganizationVpcFlowLogsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference <a name="NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkManagementOrganizationVpcFlowLogsConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---



