# `agentRegistryService` Submodule <a name="`agentRegistryService` Submodule" id="@cdktn/provider-google.agentRegistryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentRegistryService <a name="AgentRegistryService" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service google_agent_registry_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryService(Construct Scope, string Id, AgentRegistryServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig">AgentRegistryServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig">AgentRegistryServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec">PutAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putEndpointSpec">PutEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putInterfaces">PutInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec">PutMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetAgentSpec">ResetAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetEndpointSpec">ResetEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetInterfaces">ResetInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetMcpServerSpec">ResetMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentSpec` <a name="PutAgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec"></a>

```csharp
private void PutAgentSpec(AgentRegistryServiceAgentSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

---

##### `PutEndpointSpec` <a name="PutEndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putEndpointSpec"></a>

```csharp
private void PutEndpointSpec(AgentRegistryServiceEndpointSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

---

##### `PutInterfaces` <a name="PutInterfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putInterfaces"></a>

```csharp
private void PutInterfaces(IResolvable|AgentRegistryServiceInterfaces[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putInterfaces.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>[]

---

##### `PutMcpServerSpec` <a name="PutMcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec"></a>

```csharp
private void PutMcpServerSpec(AgentRegistryServiceMcpServerSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts"></a>

```csharp
private void PutTimeouts(AgentRegistryServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

---

##### `ResetAgentSpec` <a name="ResetAgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetAgentSpec"></a>

```csharp
private void ResetAgentSpec()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEndpointSpec` <a name="ResetEndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetEndpointSpec"></a>

```csharp
private void ResetEndpointSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInterfaces` <a name="ResetInterfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetInterfaces"></a>

```csharp
private void ResetInterfaces()
```

##### `ResetMcpServerSpec` <a name="ResetMcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetMcpServerSpec"></a>

```csharp
private void ResetMcpServerSpec()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AgentRegistryService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

AgentRegistryService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

AgentRegistryService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

AgentRegistryService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

AgentRegistryService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AgentRegistryService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentRegistryService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentRegistryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AgentRegistryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpec">AgentSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference">AgentRegistryServiceAgentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpec">EndpointSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference">AgentRegistryServiceEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfaces">Interfaces</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList">AgentRegistryServiceInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpec">McpServerSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference">AgentRegistryServiceMcpServerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.registryResource">RegistryResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference">AgentRegistryServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpecInput">AgentSpecInput</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpecInput">EndpointSpecInput</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfacesInput">InterfacesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpecInput">McpServerSpecInput</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentSpec`<sup>Required</sup> <a name="AgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpec"></a>

```csharp
public AgentRegistryServiceAgentSpecOutputReference AgentSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference">AgentRegistryServiceAgentSpecOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EndpointSpec`<sup>Required</sup> <a name="EndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpec"></a>

```csharp
public AgentRegistryServiceEndpointSpecOutputReference EndpointSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference">AgentRegistryServiceEndpointSpecOutputReference</a>

---

##### `Interfaces`<sup>Required</sup> <a name="Interfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfaces"></a>

```csharp
public AgentRegistryServiceInterfacesList Interfaces { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList">AgentRegistryServiceInterfacesList</a>

---

##### `McpServerSpec`<sup>Required</sup> <a name="McpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpec"></a>

```csharp
public AgentRegistryServiceMcpServerSpecOutputReference McpServerSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference">AgentRegistryServiceMcpServerSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RegistryResource`<sup>Required</sup> <a name="RegistryResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.registryResource"></a>

```csharp
public string RegistryResource { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeouts"></a>

```csharp
public AgentRegistryServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference">AgentRegistryServiceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AgentSpecInput`<sup>Optional</sup> <a name="AgentSpecInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpecInput"></a>

```csharp
public AgentRegistryServiceAgentSpec AgentSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EndpointSpecInput`<sup>Optional</sup> <a name="EndpointSpecInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpecInput"></a>

```csharp
public AgentRegistryServiceEndpointSpec EndpointSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterfacesInput`<sup>Optional</sup> <a name="InterfacesInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfacesInput"></a>

```csharp
public IResolvable|AgentRegistryServiceInterfaces[] InterfacesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>[]

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `McpServerSpecInput`<sup>Optional</sup> <a name="McpServerSpecInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpecInput"></a>

```csharp
public AgentRegistryServiceMcpServerSpec McpServerSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeoutsInput"></a>

```csharp
public IResolvable|AgentRegistryServiceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentRegistryServiceAgentSpec <a name="AgentRegistryServiceAgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryServiceAgentSpec {
    string Type,
    string Content = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.type">Type</a></code> | <code>string</code> | The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"]. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.content">Content</a></code> | <code>string</code> | The content of the Agent spec in the JSON format. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The content of the Agent spec in the JSON format.

This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#content AgentRegistryService#content}

---

### AgentRegistryServiceConfig <a name="AgentRegistryServiceConfig" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string ServiceId,
    AgentRegistryServiceAgentSpec AgentSpec = null,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    AgentRegistryServiceEndpointSpec EndpointSpec = null,
    string Id = null,
    IResolvable|AgentRegistryServiceInterfaces[] Interfaces = null,
    AgentRegistryServiceMcpServerSpec McpServerSpec = null,
    string Project = null,
    AgentRegistryServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.serviceId">ServiceId</a></code> | <code>string</code> | The name of the Service. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.agentSpec">AgentSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | agent_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.description">Description</a></code> | <code>string</code> | The description of the Service. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-defined display name for the Service. Can have a maximum length of 63 characters. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.endpointSpec">EndpointSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#id AgentRegistryService#id}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.interfaces">Interfaces</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>[]</code> | interfaces block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.mcpServerSpec">McpServerSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | mcp_server_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#project AgentRegistryService#project}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#location AgentRegistryService#location}

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

The name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#service_id AgentRegistryService#service_id}

---

##### `AgentSpec`<sup>Optional</sup> <a name="AgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.agentSpec"></a>

```csharp
public AgentRegistryServiceAgentSpec AgentSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

agent_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#agent_spec AgentRegistryService#agent_spec}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#deletion_policy AgentRegistryService#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#description AgentRegistryService#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-defined display name for the Service. Can have a maximum length of 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#display_name AgentRegistryService#display_name}

---

##### `EndpointSpec`<sup>Optional</sup> <a name="EndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.endpointSpec"></a>

```csharp
public AgentRegistryServiceEndpointSpec EndpointSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#endpoint_spec AgentRegistryService#endpoint_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#id AgentRegistryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interfaces`<sup>Optional</sup> <a name="Interfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.interfaces"></a>

```csharp
public IResolvable|AgentRegistryServiceInterfaces[] Interfaces { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>[]

interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#interfaces AgentRegistryService#interfaces}

---

##### `McpServerSpec`<sup>Optional</sup> <a name="McpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.mcpServerSpec"></a>

```csharp
public AgentRegistryServiceMcpServerSpec McpServerSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

mcp_server_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#mcp_server_spec AgentRegistryService#mcp_server_spec}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#project AgentRegistryService#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.timeouts"></a>

```csharp
public AgentRegistryServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#timeouts AgentRegistryService#timeouts}

---

### AgentRegistryServiceEndpointSpec <a name="AgentRegistryServiceEndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryServiceEndpointSpec {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec.property.type">Type</a></code> | <code>string</code> | The type of the Endpoint spec content. Possible values: ["NO_SPEC"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the Endpoint spec content. Possible values: ["NO_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

### AgentRegistryServiceInterfaces <a name="AgentRegistryServiceInterfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryServiceInterfaces {
    string ProtocolBinding,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.protocolBinding">ProtocolBinding</a></code> | <code>string</code> | The protocol binding of the interface. Possible values: ["JSONRPC", "GRPC", "HTTP_JSON"]. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.url">Url</a></code> | <code>string</code> | The destination URL. |

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.protocolBinding"></a>

```csharp
public string ProtocolBinding { get; set; }
```

- *Type:* string

The protocol binding of the interface. Possible values: ["JSONRPC", "GRPC", "HTTP_JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#protocol_binding AgentRegistryService#protocol_binding}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The destination URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#url AgentRegistryService#url}

---

### AgentRegistryServiceMcpServerSpec <a name="AgentRegistryServiceMcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryServiceMcpServerSpec {
    string Type,
    string Content = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.type">Type</a></code> | <code>string</code> | The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"]. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.content">Content</a></code> | <code>string</code> | The content of the MCP Server spec. This payload is validated against the schema for the specified type. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The content of the MCP Server spec. This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#content AgentRegistryService#content}

---

### AgentRegistryServiceTimeouts <a name="AgentRegistryServiceTimeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#create AgentRegistryService#create}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#delete AgentRegistryService#delete}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#update AgentRegistryService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#create AgentRegistryService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#delete AgentRegistryService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/agent_registry_service#update AgentRegistryService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AgentRegistryServiceAgentSpecOutputReference <a name="AgentRegistryServiceAgentSpecOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryServiceAgentSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.internalValue"></a>

```csharp
public AgentRegistryServiceAgentSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

---


### AgentRegistryServiceEndpointSpecOutputReference <a name="AgentRegistryServiceEndpointSpecOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryServiceEndpointSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.internalValue"></a>

```csharp
public AgentRegistryServiceEndpointSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

---


### AgentRegistryServiceInterfacesList <a name="AgentRegistryServiceInterfacesList" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryServiceInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.get"></a>

```csharp
private AgentRegistryServiceInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.internalValue"></a>

```csharp
public IResolvable|AgentRegistryServiceInterfaces[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>[]

---


### AgentRegistryServiceInterfacesOutputReference <a name="AgentRegistryServiceInterfacesOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryServiceInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBindingInput">ProtocolBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBinding">ProtocolBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtocolBindingInput`<sup>Optional</sup> <a name="ProtocolBindingInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBindingInput"></a>

```csharp
public string ProtocolBindingInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBinding"></a>

```csharp
public string ProtocolBinding { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AgentRegistryServiceInterfaces InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>

---


### AgentRegistryServiceMcpServerSpecOutputReference <a name="AgentRegistryServiceMcpServerSpecOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryServiceMcpServerSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.internalValue"></a>

```csharp
public AgentRegistryServiceMcpServerSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

---


### AgentRegistryServiceTimeoutsOutputReference <a name="AgentRegistryServiceTimeoutsOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentRegistryServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AgentRegistryServiceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

---



