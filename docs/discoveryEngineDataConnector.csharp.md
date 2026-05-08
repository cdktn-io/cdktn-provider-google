# `discoveryEngineDataConnector` Submodule <a name="`discoveryEngineDataConnector` Submodule" id="@cdktn/provider-google.discoveryEngineDataConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineDataConnector <a name="DiscoveryEngineDataConnector" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector google_discovery_engine_data_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnector(Construct Scope, string Id, DiscoveryEngineDataConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig">DiscoveryEngineDataConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig">DiscoveryEngineDataConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig">PutActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig">PutBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs">PutDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities">PutEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetActionConfig">ResetActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetAutoRunDisabled">ResetAutoRunDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetBapConfig">ResetBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetConnectorModes">ResetConnectorModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDataSourceVersion">ResetDataSourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDestinationConfigs">ResetDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetEntities">ResetEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalRefreshInterval">ResetIncrementalRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalSyncDisabled">ResetIncrementalSyncDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetJsonParams">ResetJsonParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetStaticIpEnabled">ResetStaticIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetSyncMode">ResetSyncMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionConfig` <a name="PutActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig"></a>

```csharp
private void PutActionConfig(DiscoveryEngineDataConnectorActionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---

##### `PutBapConfig` <a name="PutBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig"></a>

```csharp
private void PutBapConfig(DiscoveryEngineDataConnectorBapConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---

##### `PutDestinationConfigs` <a name="PutDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs"></a>

```csharp
private void PutDestinationConfigs(IResolvable|DiscoveryEngineDataConnectorDestinationConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]

---

##### `PutEntities` <a name="PutEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities"></a>

```csharp
private void PutEntities(IResolvable|DiscoveryEngineDataConnectorEntities[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts"></a>

```csharp
private void PutTimeouts(DiscoveryEngineDataConnectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

---

##### `ResetActionConfig` <a name="ResetActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetActionConfig"></a>

```csharp
private void ResetActionConfig()
```

##### `ResetAutoRunDisabled` <a name="ResetAutoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetAutoRunDisabled"></a>

```csharp
private void ResetAutoRunDisabled()
```

##### `ResetBapConfig` <a name="ResetBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetBapConfig"></a>

```csharp
private void ResetBapConfig()
```

##### `ResetConnectorModes` <a name="ResetConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetConnectorModes"></a>

```csharp
private void ResetConnectorModes()
```

##### `ResetDataSourceVersion` <a name="ResetDataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDataSourceVersion"></a>

```csharp
private void ResetDataSourceVersion()
```

##### `ResetDestinationConfigs` <a name="ResetDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDestinationConfigs"></a>

```csharp
private void ResetDestinationConfigs()
```

##### `ResetEntities` <a name="ResetEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetEntities"></a>

```csharp
private void ResetEntities()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncrementalRefreshInterval` <a name="ResetIncrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalRefreshInterval"></a>

```csharp
private void ResetIncrementalRefreshInterval()
```

##### `ResetIncrementalSyncDisabled` <a name="ResetIncrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalSyncDisabled"></a>

```csharp
private void ResetIncrementalSyncDisabled()
```

##### `ResetJsonParams` <a name="ResetJsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetJsonParams"></a>

```csharp
private void ResetJsonParams()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetStaticIpEnabled` <a name="ResetStaticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetStaticIpEnabled"></a>

```csharp
private void ResetStaticIpEnabled()
```

##### `ResetSyncMode` <a name="ResetSyncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetSyncMode"></a>

```csharp
private void ResetSyncMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineDataConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineDataConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineDataConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineDataConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineDataConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineDataConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineDataConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfig">ActionConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference">DiscoveryEngineDataConnectorActionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionState">ActionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfig">BapConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference">DiscoveryEngineDataConnectorBapConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.blockingReasons">BlockingReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigs">DestinationConfigs</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList">DiscoveryEngineDataConnectorDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entities">Entities</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList">DiscoveryEngineDataConnectorEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList">DiscoveryEngineDataConnectorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lastSyncTime">LastSyncTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.latestPauseTime">LatestPauseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.privateConnectivityProjectId">PrivateConnectivityProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.realtimeState">RealtimeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpAddresses">StaticIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference">DiscoveryEngineDataConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfigInput">ActionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabledInput">AutoRunDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfigInput">BapConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayNameInput">CollectionDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModesInput">ConnectorModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceInput">DataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersionInput">DataSourceVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigsInput">DestinationConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entitiesInput">EntitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput">IncrementalRefreshIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabledInput">IncrementalSyncDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParamsInput">JsonParamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.paramsInput">ParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshIntervalInput">RefreshIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabledInput">StaticIpEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncModeInput">SyncModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabled">AutoRunDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayName">CollectionDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModes">ConnectorModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersion">DataSourceVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshInterval">IncrementalRefreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabled">IncrementalSyncDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParams">JsonParams</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.params">Params</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshInterval">RefreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabled">StaticIpEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncMode">SyncMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActionConfig`<sup>Required</sup> <a name="ActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfig"></a>

```csharp
public DiscoveryEngineDataConnectorActionConfigOutputReference ActionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference">DiscoveryEngineDataConnectorActionConfigOutputReference</a>

---

##### `ActionState`<sup>Required</sup> <a name="ActionState" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionState"></a>

```csharp
public string ActionState { get; }
```

- *Type:* string

---

##### `BapConfig`<sup>Required</sup> <a name="BapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfig"></a>

```csharp
public DiscoveryEngineDataConnectorBapConfigOutputReference BapConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference">DiscoveryEngineDataConnectorBapConfigOutputReference</a>

---

##### `BlockingReasons`<sup>Required</sup> <a name="BlockingReasons" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.blockingReasons"></a>

```csharp
public string[] BlockingReasons { get; }
```

- *Type:* string[]

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DestinationConfigs`<sup>Required</sup> <a name="DestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigs"></a>

```csharp
public DiscoveryEngineDataConnectorDestinationConfigsList DestinationConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList">DiscoveryEngineDataConnectorDestinationConfigsList</a>

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entities"></a>

```csharp
public DiscoveryEngineDataConnectorEntitiesList Entities { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList">DiscoveryEngineDataConnectorEntitiesList</a>

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.errors"></a>

```csharp
public DiscoveryEngineDataConnectorErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList">DiscoveryEngineDataConnectorErrorsList</a>

---

##### `LastSyncTime`<sup>Required</sup> <a name="LastSyncTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lastSyncTime"></a>

```csharp
public string LastSyncTime { get; }
```

- *Type:* string

---

##### `LatestPauseTime`<sup>Required</sup> <a name="LatestPauseTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.latestPauseTime"></a>

```csharp
public string LatestPauseTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateConnectivityProjectId`<sup>Required</sup> <a name="PrivateConnectivityProjectId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.privateConnectivityProjectId"></a>

```csharp
public string PrivateConnectivityProjectId { get; }
```

- *Type:* string

---

##### `RealtimeState`<sup>Required</sup> <a name="RealtimeState" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.realtimeState"></a>

```csharp
public string RealtimeState { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StaticIpAddresses`<sup>Required</sup> <a name="StaticIpAddresses" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpAddresses"></a>

```csharp
public string[] StaticIpAddresses { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeouts"></a>

```csharp
public DiscoveryEngineDataConnectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference">DiscoveryEngineDataConnectorTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActionConfigInput`<sup>Optional</sup> <a name="ActionConfigInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfigInput"></a>

```csharp
public DiscoveryEngineDataConnectorActionConfig ActionConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---

##### `AutoRunDisabledInput`<sup>Optional</sup> <a name="AutoRunDisabledInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabledInput"></a>

```csharp
public bool|IResolvable AutoRunDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BapConfigInput`<sup>Optional</sup> <a name="BapConfigInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfigInput"></a>

```csharp
public DiscoveryEngineDataConnectorBapConfig BapConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---

##### `CollectionDisplayNameInput`<sup>Optional</sup> <a name="CollectionDisplayNameInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayNameInput"></a>

```csharp
public string CollectionDisplayNameInput { get; }
```

- *Type:* string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `ConnectorModesInput`<sup>Optional</sup> <a name="ConnectorModesInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModesInput"></a>

```csharp
public string[] ConnectorModesInput { get; }
```

- *Type:* string[]

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceInput"></a>

```csharp
public string DataSourceInput { get; }
```

- *Type:* string

---

##### `DataSourceVersionInput`<sup>Optional</sup> <a name="DataSourceVersionInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersionInput"></a>

```csharp
public double DataSourceVersionInput { get; }
```

- *Type:* double

---

##### `DestinationConfigsInput`<sup>Optional</sup> <a name="DestinationConfigsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigsInput"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorDestinationConfigs[] DestinationConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entitiesInput"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorEntities[] EntitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncrementalRefreshIntervalInput`<sup>Optional</sup> <a name="IncrementalRefreshIntervalInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput"></a>

```csharp
public string IncrementalRefreshIntervalInput { get; }
```

- *Type:* string

---

##### `IncrementalSyncDisabledInput`<sup>Optional</sup> <a name="IncrementalSyncDisabledInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabledInput"></a>

```csharp
public bool|IResolvable IncrementalSyncDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `JsonParamsInput`<sup>Optional</sup> <a name="JsonParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParamsInput"></a>

```csharp
public string JsonParamsInput { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.paramsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RefreshIntervalInput`<sup>Optional</sup> <a name="RefreshIntervalInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshIntervalInput"></a>

```csharp
public string RefreshIntervalInput { get; }
```

- *Type:* string

---

##### `StaticIpEnabledInput`<sup>Optional</sup> <a name="StaticIpEnabledInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabledInput"></a>

```csharp
public bool|IResolvable StaticIpEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SyncModeInput`<sup>Optional</sup> <a name="SyncModeInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncModeInput"></a>

```csharp
public string SyncModeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeoutsInput"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

---

##### `AutoRunDisabled`<sup>Required</sup> <a name="AutoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabled"></a>

```csharp
public bool|IResolvable AutoRunDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CollectionDisplayName`<sup>Required</sup> <a name="CollectionDisplayName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayName"></a>

```csharp
public string CollectionDisplayName { get; }
```

- *Type:* string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `ConnectorModes`<sup>Required</sup> <a name="ConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModes"></a>

```csharp
public string[] ConnectorModes { get; }
```

- *Type:* string[]

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `DataSourceVersion`<sup>Required</sup> <a name="DataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersion"></a>

```csharp
public double DataSourceVersion { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncrementalRefreshInterval`<sup>Required</sup> <a name="IncrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshInterval"></a>

```csharp
public string IncrementalRefreshInterval { get; }
```

- *Type:* string

---

##### `IncrementalSyncDisabled`<sup>Required</sup> <a name="IncrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabled"></a>

```csharp
public bool|IResolvable IncrementalSyncDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `JsonParams`<sup>Required</sup> <a name="JsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParams"></a>

```csharp
public string JsonParams { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.params"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Params { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshInterval"></a>

```csharp
public string RefreshInterval { get; }
```

- *Type:* string

---

##### `StaticIpEnabled`<sup>Required</sup> <a name="StaticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabled"></a>

```csharp
public bool|IResolvable StaticIpEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SyncMode`<sup>Required</sup> <a name="SyncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncMode"></a>

```csharp
public string SyncMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineDataConnectorActionConfig <a name="DiscoveryEngineDataConnectorActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorActionConfig {
    System.Collections.Generic.IDictionary<string, string> ActionParams = null,
    bool|IResolvable CreateBapConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.actionParams">ActionParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Params needed to configure the actions in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.createBapConnection">CreateBapConnection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to create a BAP (Business Application Platform) connection for this action connector. |

---

##### `ActionParams`<sup>Optional</sup> <a name="ActionParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.actionParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ActionParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Params needed to configure the actions in the format of String-to-String (Key, Value) pairs.

Contains connection
credentials and configuration for the action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#action_params DiscoveryEngineDataConnector#action_params}

---

##### `CreateBapConnection`<sup>Optional</sup> <a name="CreateBapConnection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.createBapConnection"></a>

```csharp
public bool|IResolvable CreateBapConnection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to create a BAP (Business Application Platform) connection for this action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#create_bap_connection DiscoveryEngineDataConnector#create_bap_connection}

---

### DiscoveryEngineDataConnectorBapConfig <a name="DiscoveryEngineDataConnectorBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorBapConfig {
    string[] EnabledActions = null,
    string[] SupportedConnectorModes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.enabledActions">EnabledActions</a></code> | <code>string[]</code> | The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes">SupportedConnectorModes</a></code> | <code>string[]</code> | The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'. |

---

##### `EnabledActions`<sup>Optional</sup> <a name="EnabledActions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.enabledActions"></a>

```csharp
public string[] EnabledActions { get; set; }
```

- *Type:* string[]

The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#enabled_actions DiscoveryEngineDataConnector#enabled_actions}

---

##### `SupportedConnectorModes`<sup>Optional</sup> <a name="SupportedConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes"></a>

```csharp
public string[] SupportedConnectorModes { get; set; }
```

- *Type:* string[]

The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#supported_connector_modes DiscoveryEngineDataConnector#supported_connector_modes}

---

### DiscoveryEngineDataConnectorConfig <a name="DiscoveryEngineDataConnectorConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CollectionDisplayName,
    string CollectionId,
    string DataSource,
    string Location,
    string RefreshInterval,
    DiscoveryEngineDataConnectorActionConfig ActionConfig = null,
    bool|IResolvable AutoRunDisabled = null,
    DiscoveryEngineDataConnectorBapConfig BapConfig = null,
    string[] ConnectorModes = null,
    double DataSourceVersion = null,
    IResolvable|DiscoveryEngineDataConnectorDestinationConfigs[] DestinationConfigs = null,
    IResolvable|DiscoveryEngineDataConnectorEntities[] Entities = null,
    string Id = null,
    string IncrementalRefreshInterval = null,
    bool|IResolvable IncrementalSyncDisabled = null,
    string JsonParams = null,
    string KmsKeyName = null,
    System.Collections.Generic.IDictionary<string, string> Params = null,
    string Project = null,
    bool|IResolvable StaticIpEnabled = null,
    string SyncMode = null,
    DiscoveryEngineDataConnectorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionDisplayName">CollectionDisplayName</a></code> | <code>string</code> | The display name of the Collection. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | The ID to use for the Collection, which will become the final component of the Collection's resource name. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSource">DataSource</a></code> | <code>string</code> | The identifier for the data source. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.refreshInterval">RefreshInterval</a></code> | <code>string</code> | The refresh interval for data sync. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.actionConfig">ActionConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | action_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.autoRunDisabled">AutoRunDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether full syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.bapConfig">BapConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | bap_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connectorModes">ConnectorModes</a></code> | <code>string[]</code> | The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSourceVersion">DataSourceVersion</a></code> | <code>double</code> | The version of the data source. For example, '3' for Jira v3. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.destinationConfigs">DestinationConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]</code> | destination_configs block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.entities">Entities</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]</code> | entities block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval">IncrementalRefreshInterval</a></code> | <code>string</code> | The refresh interval specifically for incremental data syncs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled">IncrementalSyncDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether incremental syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.jsonParams">JsonParams</a></code> | <code>string</code> | Params needed to access the source in the format of json string. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The KMS key to be used to protect the DataStores managed by this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.params">Params</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Params needed to access the source in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.staticIpEnabled">StaticIpEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether customer has enabled static IP addresses for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.syncMode">SyncMode</a></code> | <code>string</code> | The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CollectionDisplayName`<sup>Required</sup> <a name="CollectionDisplayName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionDisplayName"></a>

```csharp
public string CollectionDisplayName { get; set; }
```

- *Type:* string

The display name of the Collection.

Should be human readable, used to display collections in the Console
Dashboard. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#collection_display_name DiscoveryEngineDataConnector#collection_display_name}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

The ID to use for the Collection, which will become the final component of the Collection's resource name.

A new Collection is created as
part of the DataConnector setup. DataConnector is a singleton
resource under Collection, managing all DataStores of the Collection.
This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
standard with a length limit of 63 characters. Otherwise, an
INVALID_ARGUMENT error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#collection_id DiscoveryEngineDataConnector#collection_id}

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSource"></a>

```csharp
public string DataSource { get; set; }
```

- *Type:* string

The identifier for the data source.

This is a partial list of supported connectors. Please refer to the
[documentation](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/introduction-to-connectors-and-data-stores)
for the full list of connectors.

Supported first-party connectors include:

* 'bigquery'
* 'gcp_fhir'
* 'google_mail'
* 'google_drive'
* 'google_calendar'
* 'google_chat'

Supported third-party connectors include:
Generally available (GA) connectors:

* 'onedrive'
* 'outlook'
* 'confluence'
* 'jira'
* 'servicenow'
* 'sharepoint'

Preview connectors:

* 'asana'
* 'azure_active_directory'
* 'box'
* 'canva'
* 'confluence_server'
* 'custom_connector'
* 'docusign'
* 'dropbox'
* 'dynamics365'
* 'github'
* 'gitlab'
* 'hubspot'
* 'jira_server'
* 'linear'
* 'native_cloud_identity'
* 'notion'
* 'okta'
* 'pagerduty'
* 'peoplesoft'
* 'salesforce'
* 'shopify'
* 'slack'
* 'snowflake'
* 'teams'
* 'trello'
* 'workday'
* 'zendesk'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#data_source DiscoveryEngineDataConnector#data_source}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#location DiscoveryEngineDataConnector#location}

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.refreshInterval"></a>

```csharp
public string RefreshInterval { get; set; }
```

- *Type:* string

The refresh interval for data sync.

If duration is set to 0, the data will
be synced in real time. The streaming feature is not supported yet. The
minimum is 30 minutes and maximum is 7 days. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#refresh_interval DiscoveryEngineDataConnector#refresh_interval}

---

##### `ActionConfig`<sup>Optional</sup> <a name="ActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.actionConfig"></a>

```csharp
public DiscoveryEngineDataConnectorActionConfig ActionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

action_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#action_config DiscoveryEngineDataConnector#action_config}

---

##### `AutoRunDisabled`<sup>Optional</sup> <a name="AutoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.autoRunDisabled"></a>

```csharp
public bool|IResolvable AutoRunDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether full syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#auto_run_disabled DiscoveryEngineDataConnector#auto_run_disabled}

---

##### `BapConfig`<sup>Optional</sup> <a name="BapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.bapConfig"></a>

```csharp
public DiscoveryEngineDataConnectorBapConfig BapConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

bap_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#bap_config DiscoveryEngineDataConnector#bap_config}

---

##### `ConnectorModes`<sup>Optional</sup> <a name="ConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connectorModes"></a>

```csharp
public string[] ConnectorModes { get; set; }
```

- *Type:* string[]

The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#connector_modes DiscoveryEngineDataConnector#connector_modes}

---

##### `DataSourceVersion`<sup>Optional</sup> <a name="DataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSourceVersion"></a>

```csharp
public double DataSourceVersion { get; set; }
```

- *Type:* double

The version of the data source. For example, '3' for Jira v3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#data_source_version DiscoveryEngineDataConnector#data_source_version}

---

##### `DestinationConfigs`<sup>Optional</sup> <a name="DestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.destinationConfigs"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorDestinationConfigs[] DestinationConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]

destination_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#destination_configs DiscoveryEngineDataConnector#destination_configs}

---

##### `Entities`<sup>Optional</sup> <a name="Entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.entities"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorEntities[] Entities { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#entities DiscoveryEngineDataConnector#entities}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncrementalRefreshInterval`<sup>Optional</sup> <a name="IncrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval"></a>

```csharp
public string IncrementalRefreshInterval { get; set; }
```

- *Type:* string

The refresh interval specifically for incremental data syncs.

If unset,
incremental syncs will use the default from env, set to 3hrs.
The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P
connectors. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#incremental_refresh_interval DiscoveryEngineDataConnector#incremental_refresh_interval}

---

##### `IncrementalSyncDisabled`<sup>Optional</sup> <a name="IncrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled"></a>

```csharp
public bool|IResolvable IncrementalSyncDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether incremental syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#incremental_sync_disabled DiscoveryEngineDataConnector#incremental_sync_disabled}

---

##### `JsonParams`<sup>Optional</sup> <a name="JsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.jsonParams"></a>

```csharp
public string JsonParams { get; set; }
```

- *Type:* string

Params needed to access the source in the format of json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#json_params DiscoveryEngineDataConnector#json_params}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The KMS key to be used to protect the DataStores managed by this connector.

Must be set for requests that need to comply with CMEK Org Policy
protections.
If this field is set and processed successfully, the DataStores created by
this connector will be protected by the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#kms_key_name DiscoveryEngineDataConnector#kms_key_name}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.params"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Params { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Params needed to access the source in the format of String-to-String (Key, Value) pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}.

---

##### `StaticIpEnabled`<sup>Optional</sup> <a name="StaticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.staticIpEnabled"></a>

```csharp
public bool|IResolvable StaticIpEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether customer has enabled static IP addresses for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#static_ip_enabled DiscoveryEngineDataConnector#static_ip_enabled}

---

##### `SyncMode`<sup>Optional</sup> <a name="SyncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.syncMode"></a>

```csharp
public string SyncMode { get; set; }
```

- *Type:* string

The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#sync_mode DiscoveryEngineDataConnector#sync_mode}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.timeouts"></a>

```csharp
public DiscoveryEngineDataConnectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#timeouts DiscoveryEngineDataConnector#timeouts}

---

### DiscoveryEngineDataConnectorDestinationConfigs <a name="DiscoveryEngineDataConnectorDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorDestinationConfigs {
    IResolvable|DiscoveryEngineDataConnectorDestinationConfigsDestinations[] Destinations = null,
    string Key = null,
    string Params = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]</code> | destinations block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.key">Key</a></code> | <code>string</code> | The key of the destination configuration, for example 'url'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.params">Params</a></code> | <code>string</code> | Additional parameters for this destination config in structured json format. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.destinations"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorDestinationConfigsDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#destinations DiscoveryEngineDataConnector#destinations}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the destination configuration, for example 'url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#key DiscoveryEngineDataConnector#key}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.params"></a>

```csharp
public string Params { get; set; }
```

- *Type:* string

Additional parameters for this destination config in structured json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

### DiscoveryEngineDataConnectorDestinationConfigsDestinations <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorDestinationConfigsDestinations {
    string Host = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host">Host</a></code> | <code>string</code> | The host of the destination, for example 'https://example.atlassian.net'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port">Port</a></code> | <code>double</code> | Target port number accepted by the destination. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The host of the destination, for example 'https://example.atlassian.net'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#host DiscoveryEngineDataConnector#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Target port number accepted by the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#port DiscoveryEngineDataConnector#port}

---

### DiscoveryEngineDataConnectorEntities <a name="DiscoveryEngineDataConnectorEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorEntities {
    string EntityName = null,
    System.Collections.Generic.IDictionary<string, string> KeyPropertyMappings = null,
    string Params = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.entityName">EntityName</a></code> | <code>string</code> | The name of the entity. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.keyPropertyMappings">KeyPropertyMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Attributes for indexing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.params">Params</a></code> | <code>string</code> | The parameters for the entity to facilitate data ingestion. |

---

##### `EntityName`<sup>Optional</sup> <a name="EntityName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.entityName"></a>

```csharp
public string EntityName { get; set; }
```

- *Type:* string

The name of the entity.

Supported values by data source:

* Salesforce: 'Lead', 'Opportunity', 'Contact', 'Account', 'Case', 'Contract', 'Campaign'
* Jira: project, issue, attachment, comment, worklog
* Confluence: 'Content', 'Space'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#entity_name DiscoveryEngineDataConnector#entity_name}

---

##### `KeyPropertyMappings`<sup>Optional</sup> <a name="KeyPropertyMappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.keyPropertyMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KeyPropertyMappings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Attributes for indexing.

Key: Field name.
Value: The key property to map a field to, such as 'title', and
'description'. Supported key properties:

* 'title': The title for data record. This would be displayed on search
  results.
* 'description': The description for data record. This would be displayed
  on search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#key_property_mappings DiscoveryEngineDataConnector#key_property_mappings}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.params"></a>

```csharp
public string Params { get; set; }
```

- *Type:* string

The parameters for the entity to facilitate data ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

### DiscoveryEngineDataConnectorErrors <a name="DiscoveryEngineDataConnectorErrors" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorErrors {

};
```


### DiscoveryEngineDataConnectorTimeouts <a name="DiscoveryEngineDataConnectorTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#create DiscoveryEngineDataConnector#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#delete DiscoveryEngineDataConnector#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#update DiscoveryEngineDataConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#create DiscoveryEngineDataConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#delete DiscoveryEngineDataConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_data_connector#update DiscoveryEngineDataConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineDataConnectorActionConfigOutputReference <a name="DiscoveryEngineDataConnectorActionConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorActionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams">ResetActionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection">ResetCreateBapConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionParams` <a name="ResetActionParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams"></a>

```csharp
private void ResetActionParams()
```

##### `ResetCreateBapConnection` <a name="ResetCreateBapConnection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection"></a>

```csharp
private void ResetCreateBapConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured">IsActionConfigured</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput">ActionParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput">CreateBapConnectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams">ActionParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection">CreateBapConnection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsActionConfigured`<sup>Required</sup> <a name="IsActionConfigured" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured"></a>

```csharp
public IResolvable IsActionConfigured { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ActionParamsInput`<sup>Optional</sup> <a name="ActionParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ActionParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CreateBapConnectionInput`<sup>Optional</sup> <a name="CreateBapConnectionInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput"></a>

```csharp
public bool|IResolvable CreateBapConnectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ActionParams`<sup>Required</sup> <a name="ActionParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ActionParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CreateBapConnection`<sup>Required</sup> <a name="CreateBapConnection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection"></a>

```csharp
public bool|IResolvable CreateBapConnection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineDataConnectorActionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---


### DiscoveryEngineDataConnectorBapConfigOutputReference <a name="DiscoveryEngineDataConnectorBapConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorBapConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions">ResetEnabledActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes">ResetSupportedConnectorModes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabledActions` <a name="ResetEnabledActions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions"></a>

```csharp
private void ResetEnabledActions()
```

##### `ResetSupportedConnectorModes` <a name="ResetSupportedConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes"></a>

```csharp
private void ResetSupportedConnectorModes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput">EnabledActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput">SupportedConnectorModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions">EnabledActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes">SupportedConnectorModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledActionsInput`<sup>Optional</sup> <a name="EnabledActionsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput"></a>

```csharp
public string[] EnabledActionsInput { get; }
```

- *Type:* string[]

---

##### `SupportedConnectorModesInput`<sup>Optional</sup> <a name="SupportedConnectorModesInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput"></a>

```csharp
public string[] SupportedConnectorModesInput { get; }
```

- *Type:* string[]

---

##### `EnabledActions`<sup>Required</sup> <a name="EnabledActions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions"></a>

```csharp
public string[] EnabledActions { get; }
```

- *Type:* string[]

---

##### `SupportedConnectorModes`<sup>Required</sup> <a name="SupportedConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes"></a>

```csharp
public string[] SupportedConnectorModes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineDataConnectorBapConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---


### DiscoveryEngineDataConnectorDestinationConfigsDestinationsList <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinationsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorDestinationConfigsDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get"></a>

```csharp
private DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorDestinationConfigsDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]

---


### DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorDestinationConfigsDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>

---


### DiscoveryEngineDataConnectorDestinationConfigsList <a name="DiscoveryEngineDataConnectorDestinationConfigsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorDestinationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get"></a>

```csharp
private DiscoveryEngineDataConnectorDestinationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorDestinationConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]

---


### DiscoveryEngineDataConnectorDestinationConfigsOutputReference <a name="DiscoveryEngineDataConnectorDestinationConfigsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorDestinationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams">ResetParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|DiscoveryEngineDataConnectorDestinationConfigsDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams"></a>

```csharp
private void ResetParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList">DiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput">ParamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params">Params</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations"></a>

```csharp
public DiscoveryEngineDataConnectorDestinationConfigsDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList">DiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorDestinationConfigsDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput"></a>

```csharp
public string ParamsInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params"></a>

```csharp
public string Params { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorDestinationConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>

---


### DiscoveryEngineDataConnectorEntitiesList <a name="DiscoveryEngineDataConnectorEntitiesList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorEntitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get"></a>

```csharp
private DiscoveryEngineDataConnectorEntitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorEntities[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]

---


### DiscoveryEngineDataConnectorEntitiesOutputReference <a name="DiscoveryEngineDataConnectorEntitiesOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorEntitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName">ResetEntityName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings">ResetKeyPropertyMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetParams">ResetParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityName` <a name="ResetEntityName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName"></a>

```csharp
private void ResetEntityName()
```

##### `ResetKeyPropertyMappings` <a name="ResetKeyPropertyMappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings"></a>

```csharp
private void ResetKeyPropertyMappings()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetParams"></a>

```csharp
private void ResetParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore">DataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput">EntityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput">KeyPropertyMappingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput">ParamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName">EntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings">KeyPropertyMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.params">Params</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore"></a>

```csharp
public string DataStore { get; }
```

- *Type:* string

---

##### `EntityNameInput`<sup>Optional</sup> <a name="EntityNameInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput"></a>

```csharp
public string EntityNameInput { get; }
```

- *Type:* string

---

##### `KeyPropertyMappingsInput`<sup>Optional</sup> <a name="KeyPropertyMappingsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KeyPropertyMappingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput"></a>

```csharp
public string ParamsInput { get; }
```

- *Type:* string

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName"></a>

```csharp
public string EntityName { get; }
```

- *Type:* string

---

##### `KeyPropertyMappings`<sup>Required</sup> <a name="KeyPropertyMappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KeyPropertyMappings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.params"></a>

```csharp
public string Params { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorEntities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>

---


### DiscoveryEngineDataConnectorErrorsList <a name="DiscoveryEngineDataConnectorErrorsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get"></a>

```csharp
private DiscoveryEngineDataConnectorErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DiscoveryEngineDataConnectorErrorsOutputReference <a name="DiscoveryEngineDataConnectorErrorsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors">DiscoveryEngineDataConnectorErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineDataConnectorErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors">DiscoveryEngineDataConnectorErrors</a>

---


### DiscoveryEngineDataConnectorTimeoutsOutputReference <a name="DiscoveryEngineDataConnectorTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineDataConnectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineDataConnectorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

---



