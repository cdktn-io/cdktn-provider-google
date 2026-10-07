# `networkServicesAgentConnectivityTemplate` Submodule <a name="`networkServicesAgentConnectivityTemplate` Submodule" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesAgentConnectivityTemplate <a name="NetworkServicesAgentConnectivityTemplate" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template google_network_services_agent_connectivity_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesAgentConnectivityTemplate(Construct Scope, string Id, NetworkServicesAgentConnectivityTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig">NetworkServicesAgentConnectivityTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig">NetworkServicesAgentConnectivityTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig">PutEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetAccessTypes">ResetAccessTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig">ResetEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressNetworkConfig` <a name="PutEgressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig"></a>

```csharp
private void PutEgressNetworkConfig(NetworkServicesAgentConnectivityTemplateEgressNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkServicesAgentConnectivityTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `ResetAccessTypes` <a name="ResetAccessTypes" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetAccessTypes"></a>

```csharp
private void ResetAccessTypes()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEgressNetworkConfig` <a name="ResetEgressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig"></a>

```csharp
private void ResetEgressNetworkConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesAgentConnectivityTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesAgentConnectivityTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesAgentConnectivityTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesAgentConnectivityTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesAgentConnectivityTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesAgentConnectivityTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesAgentConnectivityTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig">EgressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPathInput">AccessPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypesInput">AccessTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput">AgentConnectivityTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput">EgressNetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPath">AccessPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypes">AccessTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId">AgentConnectivityTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EgressNetworkConfig`<sup>Required</sup> <a name="EgressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference EgressNetworkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeouts"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AccessPathInput`<sup>Optional</sup> <a name="AccessPathInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPathInput"></a>

```csharp
public string AccessPathInput { get; }
```

- *Type:* string

---

##### `AccessTypesInput`<sup>Optional</sup> <a name="AccessTypesInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypesInput"></a>

```csharp
public string[] AccessTypesInput { get; }
```

- *Type:* string[]

---

##### `AgentConnectivityTemplateIdInput`<sup>Optional</sup> <a name="AgentConnectivityTemplateIdInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput"></a>

```csharp
public string AgentConnectivityTemplateIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EgressNetworkConfigInput`<sup>Optional</sup> <a name="EgressNetworkConfigInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfig EgressNetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkServicesAgentConnectivityTemplateTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `AccessPath`<sup>Required</sup> <a name="AccessPath" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPath"></a>

```csharp
public string AccessPath { get; }
```

- *Type:* string

---

##### `AccessTypes`<sup>Required</sup> <a name="AccessTypes" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypes"></a>

```csharp
public string[] AccessTypes { get; }
```

- *Type:* string[]

---

##### `AgentConnectivityTemplateId`<sup>Required</sup> <a name="AgentConnectivityTemplateId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId"></a>

```csharp
public string AgentConnectivityTemplateId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesAgentConnectivityTemplateConfig <a name="NetworkServicesAgentConnectivityTemplateConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesAgentConnectivityTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessPath,
    string AgentConnectivityTemplateId,
    string Location,
    string[] AccessTypes = null,
    string DeletionPolicy = null,
    string Description = null,
    NetworkServicesAgentConnectivityTemplateEgressNetworkConfig EgressNetworkConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    NetworkServicesAgentConnectivityTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessPath">AccessPath</a></code> | <code>string</code> | The path of the access. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId">AgentConnectivityTemplateId</a></code> | <code>string</code> | Short name of the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.location">Location</a></code> | <code>string</code> | The location of the AgentConnectivityTemplate. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessTypes">AccessTypes</a></code> | <code>string[]</code> | The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig">EgressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | egress_network_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessPath`<sup>Required</sup> <a name="AccessPath" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessPath"></a>

```csharp
public string AccessPath { get; set; }
```

- *Type:* string

The path of the access.

The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#access_path NetworkServicesAgentConnectivityTemplate#access_path}

---

##### `AgentConnectivityTemplateId`<sup>Required</sup> <a name="AgentConnectivityTemplateId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId"></a>

```csharp
public string AgentConnectivityTemplateId { get; set; }
```

- *Type:* string

Short name of the AgentConnectivityTemplate resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#agent_connectivity_template_id NetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the AgentConnectivityTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#location NetworkServicesAgentConnectivityTemplate#location}

---

##### `AccessTypes`<sup>Optional</sup> <a name="AccessTypes" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessTypes"></a>

```csharp
public string[] AccessTypes { get; set; }
```

- *Type:* string[]

The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#access_types NetworkServicesAgentConnectivityTemplate#access_types}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#deletion_policy NetworkServicesAgentConnectivityTemplate#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#description NetworkServicesAgentConnectivityTemplate#description}

---

##### `EgressNetworkConfig`<sup>Optional</sup> <a name="EgressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfig EgressNetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

egress_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#egress_network_config NetworkServicesAgentConnectivityTemplate#egress_network_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the AgentConnectivityTemplate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#labels NetworkServicesAgentConnectivityTemplate#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.timeouts"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#timeouts NetworkServicesAgentConnectivityTemplate#timeouts}

---

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfig <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesAgentConnectivityTemplateEgressNetworkConfig {
    NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig DnsPeeringConfig = null,
    string NetworkAttachment = null,
    NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig TlsConfig = null,
    string VpcEgress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig">DnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | dns_peering_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress">VpcEgress</a></code> | <code>string</code> | The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `DnsPeeringConfig`<sup>Optional</sup> <a name="DnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig DnsPeeringConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#dns_peering_config NetworkServicesAgentConnectivityTemplate#dns_peering_config}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#network_attachment NetworkServicesAgentConnectivityTemplate#network_attachment}

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig TlsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#tls_config NetworkServicesAgentConnectivityTemplate#tls_config}

---

##### `VpcEgress`<sup>Optional</sup> <a name="VpcEgress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress"></a>

```csharp
public string VpcEgress { get; set; }
```

- *Type:* string

The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#vpc_egress NetworkServicesAgentConnectivityTemplate#vpc_egress}

---

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig {
    string TargetNetwork,
    string Domain = null,
    string[] Domains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain">Domain</a></code> | <code>string</code> | The domain name to peer for DNS resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains">Domains</a></code> | <code>string[]</code> | The list of domain names to peer for DNS resolution. |

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; set; }
```

- *Type:* string

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#target_network NetworkServicesAgentConnectivityTemplate#target_network}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The domain name to peer for DNS resolution.

Must be a fully
qualified domain name ending with a dot (for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#domain NetworkServicesAgentConnectivityTemplate#domain}

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.'). At least one domain must be
specified between 'domain' and 'domains'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#domains NetworkServicesAgentConnectivityTemplate#domains}

---

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig {
    string AdditionalRoots,
    string TrustConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots">AdditionalRoots</a></code> | <code>string</code> | Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig">TrustConfig</a></code> | <code>string</code> | The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}. |

---

##### `AdditionalRoots`<sup>Required</sup> <a name="AdditionalRoots" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots"></a>

```csharp
public string AdditionalRoots { get; set; }
```

- *Type:* string

Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#additional_roots NetworkServicesAgentConnectivityTemplate#additional_roots}

---

##### `TrustConfig`<sup>Optional</sup> <a name="TrustConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig"></a>

```csharp
public string TrustConfig { get; set; }
```

- *Type:* string

The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#trust_config NetworkServicesAgentConnectivityTemplate#trust_config}

---

### NetworkServicesAgentConnectivityTemplateTimeouts <a name="NetworkServicesAgentConnectivityTemplateTimeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesAgentConnectivityTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#create NetworkServicesAgentConnectivityTemplate#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#delete NetworkServicesAgentConnectivityTemplate#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#update NetworkServicesAgentConnectivityTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#create NetworkServicesAgentConnectivityTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#delete NetworkServicesAgentConnectivityTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#update NetworkServicesAgentConnectivityTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetDomains` <a name="ResetDomains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains"></a>

```csharp
private void ResetDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput"></a>

```csharp
public string TargetNetworkInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---


### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig">PutDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig">ResetDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress">ResetVpcEgress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfig` <a name="PutDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig"></a>

```csharp
private void PutDnsPeeringConfig(NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig"></a>

```csharp
private void PutTlsConfig(NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `ResetDnsPeeringConfig` <a name="ResetDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig"></a>

```csharp
private void ResetDnsPeeringConfig()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig"></a>

```csharp
private void ResetTlsConfig()
```

##### `ResetVpcEgress` <a name="ResetVpcEgress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress"></a>

```csharp
private void ResetVpcEgress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig">DnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput">DnsPeeringConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput">VpcEgressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress">VpcEgress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsPeeringConfig`<sup>Required</sup> <a name="DnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference DnsPeeringConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference TlsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a>

---

##### `DnsPeeringConfigInput`<sup>Optional</sup> <a name="DnsPeeringConfigInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig DnsPeeringConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig TlsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `VpcEgressInput`<sup>Optional</sup> <a name="VpcEgressInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput"></a>

```csharp
public string VpcEgressInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `VpcEgress`<sup>Required</sup> <a name="VpcEgress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress"></a>

```csharp
public string VpcEgress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---


### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig">ResetTrustConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTrustConfig` <a name="ResetTrustConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig"></a>

```csharp
private void ResetTrustConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput">AdditionalRootsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput">TrustConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots">AdditionalRoots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig">TrustConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRootsInput`<sup>Optional</sup> <a name="AdditionalRootsInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput"></a>

```csharp
public string AdditionalRootsInput { get; }
```

- *Type:* string

---

##### `TrustConfigInput`<sup>Optional</sup> <a name="TrustConfigInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput"></a>

```csharp
public string TrustConfigInput { get; }
```

- *Type:* string

---

##### `AdditionalRoots`<sup>Required</sup> <a name="AdditionalRoots" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots"></a>

```csharp
public string AdditionalRoots { get; }
```

- *Type:* string

---

##### `TrustConfig`<sup>Required</sup> <a name="TrustConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig"></a>

```csharp
public string TrustConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---


### NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference <a name="NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkServicesAgentConnectivityTemplateTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

---



